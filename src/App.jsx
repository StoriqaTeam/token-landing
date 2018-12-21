/* eslint-disable max-len */

import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {withTranslate} from 'react-redux-multilingual';
import {connect} from 'react-redux';
import {Link as ScrollLink} from 'react-scroll';
import axios from 'axios';
import {find} from 'lodash';
import classNames from 'classnames';
import querystring from 'querystring';
import api from 'helpers/api';

import {
  MainInfoSection,
  TeamSection,
  DemandSection,
  WhyBlockhainSection,
  RoadmapSection,
  NewRoadmapSection,
  MarketSection,
  MediaSection,
  WaysSection,
  InWorkSection,
  PartnersSection,
  SmartSection,
  SpaceSection,
  PresentSection,
  CoreSection,
  InfrastructureSection,
  NewsSection,
} from 'components/sections';

import Angle from 'components/Angle';
import Footer from 'components/Footer';
import Preorder from 'components/Preorder';
import Menu from 'components/Menu';
import {ButtonEmpty, Popup} from 'components/common';
import {buyTokensURL, withdrawURL} from 'helpers/constants';
import formatNumber from 'helpers/formatNumber2';
import getTelegramLink from 'helpers/getTelegramLink';

import './styles.sass';

const Link = ({children, to}) => (
  <ScrollLink to={to} activeClass="active" smooth={true} spy={true} offset={-80} duration={1000} isDynamic={true}>
    {children}
  </ScrollLink>
);

const currencies = ['BTC', 'ETH', 'LTC', 'USDT', 'DASH', 'NEO', 'BCH', 'BCC', 'QTUM', 'STRAT', 'DOGE', 'ZEC', 'WAVES', 'LSK', 'SYS', 'EXP', 'MAID', 'DGB', 'PPC', 'ETC'];

class App extends Component {
  constructor(props) {
    super(props);

    const parsed = querystring.parse(location.search);

    if (parsed && (parsed['?ex_popup'] === '' || parsed['?tr_popup'] === '' || parsed['?join_popup'] === '' || parsed['?kc_popup'] === '')) {
      this.setOverflow('hidden');
    }

    const dataEnds = 'Thu Nov 13 2018 23:59:59 UTC+8';
    const now = Date.now();
    const dataEndsMS = Date.parse(dataEnds);

    this.state = {
      scroll: 0,
      deposit: {},
      tokensData: {},
      ICOMainInfo: {},
      isPopup: parsed && parsed['?ex_popup'] === '' || false,
      isMerchPopup: parsed && parsed['?kc_popup'] === '' || false,
      isMVPAlert: false,
      isAirdropPopup: false,
      telegramLink: 'EN',
      isTR: false,
      isTRPopup: parsed && parsed['?tr_popup'] === '' || false,
      isJoinPopup: parsed && parsed['?join_popup'] === '' || false,
      dataEnds: dataEndsMS < now ? null : dataEnds
    };
  }

  componentWillMount() {
    this.props.dispatch({
      type: 'SET_LOCALE',
      locale: 'en'
    });

    axios.get('https://api.coinmarketcap.com/v1/ticker/storiqa/')
    .then(({data}) => {
      this.setState({dataObj: data[0]});
    })
    .catch((error) => {
      console.log(error);
    });

    axios.get('https://extreme-ip-lookup.com/json')
    .then(({data}) => {
      if (data && data.country) {
        localStorage.setItem('country', data.country);
        localStorage.setItem('country_code', data.countryCode || 'EN');
        const telegramLink = getTelegramLink(data.countryCode);
        this.setState({
          telegramLink,
          isTR: data.countryCode === 'TR',
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });

    // axios.get('https://tokensale.storiqa.com/ico-raised?authorization_key=storiqatothemoon')
    //   .then(({data}) => {
    //     this.setState({
    //       deposit: data.deposit,
    //       tokensData: data.tokens,
    //       totalTokensAmount: data.total_tokens_amount
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // axios.get('https://tokensale.storiqa.com/ico-main-info?authorization_key=storiqatothemoon')
    //   .then(({data}) => {
    //     this.setState({ICOMainInfo: data});
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    document.addEventListener('scroll', this.scrollHandler.bind(this));
    document.addEventListener('click', this.closePopup.bind(this));
    document.addEventListener('keydown', this.closePopup.bind(this));

    const now = Date.now();
    const then = localStorage.getItem('alert_set_time');

    if ((now - then) > (1000 * 60 * 60 * 24)) {
      if (this.popupMVPTimer) {
        clearTimeout(this.popupMVPTimer);
      }
      this.popupMVPTimer = setTimeout(() => {
        this.setState({
          isMerchPopup: Boolean(this.state.dataEnds),
          isJoinPopup: false
        });
        localStorage.setItem('alert_set_time', Date.now());
        this.setOverflow('hidden');
      }, 20000);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollHandler.bind(this));
    document.removeEventListener('click', this.closePopup.bind(this));
    document.removeEventListener('keydown', this.closePopup.bind(this));

    if (this.popupMVPTimer) {
      clearTimeout(this.popupMVPTimer);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    // const {isTR} = this.state;
    // if (nextState.isTR && nextState.isTR !== isTR) {
    //   const now = Date.now();
    //   const then = localStorage.getItem('tr_alert_set_time');
    //
    //   if ((now - then) > (1000 * 60 * 60 * 24)) {
    //     if (this.popupTRTimer) {
    //       clearTimeout(this.popupTRTimer);
    //     }
    //     this.popupTRTimer = setTimeout(() => {
    //       this.setState({
    //         isTRPopup: true,
    //         isJoinPopup: false
    //       });
    //       localStorage.setItem('tr_alert_set_time', Date.now());
    //       this.setOverflow('hidden');
    //     }, 10000);
    //   }
    // }
  }

  scrollHandler() {
    this.setState({scroll: document.documentElement.scrollTop || document.body.scrollTop});
  }

  handlePopup(e) {
    this.setState({
      isPopup: true
    });
  }

  closePopup(e) {
    const {popup, mvpPopup, alert, joinPopup} = this.refs;

    const popupDOM = findDOMNode(popup);
    const mvpPopupDOM = findDOMNode(mvpPopup);
    const joinPopupDOM = findDOMNode(joinPopup);

    if (popup && !popupDOM.contains(e.target)) {
      this.setState({isPopup: false});
    }

    if (!e.keyCode && mvpPopup && !mvpPopupDOM.contains(e.target)) {
      this.setState({
        isMerchPopup: false,
        isAirdropPopup: false,
        isTRPopup: false,
        isJoinPopup: false
      });
      this.setOverflow('');
    }

    if (e.keyCode === 27) {
      this.setState({
        isPopup: false,
        isMerchPopup: false,
        isTRPopup: false,
        isAirdropPopup: false,
        isJoinPopup: false
      });
      this.setOverflow('');
    }
  }

  showTRPopup() {
    this.setState({
      isTRPopup: true,
      isJoinPopup: false
    });
    this.setOverflow('hidden');
    localStorage.setItem('tr_alert_set_time', Date.now());
  }

  showAirdropPopup() {
    this.setState({
      isAirdropPopup: true
    });
    this.setOverflow('hidden');
  }

  showMerchPopup() {
    this.setState({
      isMerchPopup: true
    });
    this.setOverflow('hidden');
  }

  hidePopup() {
    this.setState({
      isMerchPopup: false,
      isAirdropPopup: false,
      isJoinPopup: false
    });
    this.setOverflow('');
  }

  hideTRPopup() {
    this.setState({
      isTRPopup: false
    });
    this.setOverflow('');
  }

  setOverflow(value) {
    document.body.style.overflow = value;
  }

  excludeEmail() {
    const email = localStorage.getItem('person_email');
    api().post('/exclude', {email})
      .then(result => {
        console.log('Exclude result:', result.data);
        console.log(`Email ${email} exclude from list`);
        localStorage.removeItem('person_email');
        localStorage.removeItem('person_id');
      })
      .catch(err => {
        console.log('Exclude error:', err);
      });
  }

  render() {
    const {
      scroll,
      tokensData,
      ICOMainInfo,
      totalTokensAmount,
      dataObj,
      isPopup,
      isMerchPopup,
      isAirdropPopup,
      telegramLink,
      isTR,
      isTRPopup,
      isJoinPopup,
      dataEnds
    } = this.state;

    const tryDemoURL = 'https://storiqa.com/start';
    const stage = find(ICOMainInfo.ico_stages, {'id': ICOMainInfo.current_stage_id});
    const isFinished = true;

    let marketCapUsd;
    let percentChange24h;
    let priceUsd;

    if (dataObj) {
      marketCapUsd = Number(dataObj.market_cap_usd);
      percentChange24h = Number(dataObj.percent_change_24h);
      priceUsd = Number(dataObj.price_usd);
    }

    return (
      <div className="home" id="home">
        {<div className="home-subscribe d-flex flex-lg-row flex-column justify-content-center align-items-center">
          <div className="up-icon-block">
            {scroll > 320 && <Link to="home">
              <img
                className="up-icon"
                src={require('./img/up-icon.svg')}
              />
            </Link>}
            <a href={telegramLink} target="_blank" className="icon telegram mb-0 telegram-hover" title="Storiqa Community">
              <img
                className="telegram-icon"
                src={require('./img/icon-telegram.svg')}
                alt="Telegram Logo"
              />
            </a>
          </div>
        </div>}
        <nav className="header">
          <div className="top-block">
            <div className="container container-wide header-wrap d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center justify-content-lg-between">
                <Link to="home">
                  <img className="logo m-0" src={require('./img/logo-storiqa-new.svg')} alt="Storiqa Logo" />
                </Link>
                {dataObj &&
                  <div className="d-flex align-items-center">
                    <div className="marketcap header-hidden text-white">{`Marketcap: $${formatNumber(marketCapUsd)}`}</div>
                    <div className="price header-hidden">STQ price: <span className={classNames('color-text', {
                      ['color-text-green']: percentChange24h > 0,
                      ['color-text-red']: percentChange24h < 0,
                    })}>{`$${Number(priceUsd.toFixed(4))}`}
                      {percentChange24h > 0 && <span className="arrow">
                          <img src={require('./img/arrow_up.svg')} />
                        </span>}
                      {percentChange24h < 0 && <span className="arrow">
                          <img src={require('./img/arrow_down.svg')} />
                        </span>}
                      </span></div>
                    <div
                      className="rialto-button buy-stq-button"
                      onClick={this.handlePopup.bind(this)}
                    >
                      <ButtonEmpty mini filled>Buy STQ</ButtonEmpty>
                    </div>
                    <div className="rialto-button hidden-sm-down try-demo-button">
                      <ButtonEmpty mini href="https://beta.storiqa.com">Try Marketplace</ButtonEmpty>
                    </div>
                  </div>
                }
              </div>
              <div className="menu-block d-flex align-items-center justify-content-lg-end">
                <Menu handlePopup={this.handlePopup.bind(this)} />
              </div>
            </div>
          </div>
        </nav>

        {isPopup && <Popup medium>
          <div ref="popup" className="header-popup">
            <div className="desc">STQ IS AVAILABLE ON FOLLOWING EXCHANGES</div>
            <div className="item">
              <img src={require('./img/kucoin.png')} />
              <div className="exchange-kucoin-button">
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://www.kucoin.com/#/trade.pro/STQ-BTC">STQ/BTC</ButtonEmpty>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://www.kucoin.com/#/trade.pro/STQ-ETH">STQ/ETH</ButtonEmpty>
              </div>
            </div>
            <div className="item">
              <img src={require('./img/sistemkoin.png')} />
              <div className="exchange-sistemkoin-button">
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://sistemkoin.com/#/market">STQ/BTC</ButtonEmpty>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://sistemkoin.com/#/market">STQ/TL</ButtonEmpty>
              </div>
            </div>
            <div className="item">
              <img src={require('./img/tokenomy.png')} />
              <div className="exchange-tokenomy-button">
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://exchange.tokenomy.com/market/STQBTC">STQ/BTC</ButtonEmpty>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://exchange.tokenomy.com/market/STQSETH">STQ/ETH</ButtonEmpty>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://exchange.tokenomy.com/market/STQTEN">STQ/TEN</ButtonEmpty>
              </div>
            </div>
            <div className="item">
              <img src={require('./img/hitbtc2.png')} />
              <div>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://hitbtc.com/STQ-to-BTC">STQ/BTC</ButtonEmpty>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://hitbtc.com/STQ-to-USDT">STQ/USDT</ButtonEmpty>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://hitbtc.com/STQ-to-ETH">STQ/ETH</ButtonEmpty>
              </div>
            </div>
            <div className="item">
              <img src={require('./img/tidex2.png')} />
              <div>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://tidex.com/exchange/stq/btc">STQ/BTC</ButtonEmpty>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://tidex.com/exchange/stq/eth">STQ/ETH</ButtonEmpty>
              </div>
            </div>
            <div className="item">
              <img src={require('./img/idex2.png')} />
              <div>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://idex.market/eth/stq">STQ/ETH</ButtonEmpty>
              </div>
            </div>
            <div className="item">
              <img src={require('./img/indodax.png')} />
              <div>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://indodax.com/market/STQIDR">STQ/IDR</ButtonEmpty>
              </div>
            </div>
            <div className="item">
              <img src={require('./img/hotbit.png')} />
              <div>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://www.hotbit.io/exchange?symbol=STQ_BTC">STQ/BTC</ButtonEmpty>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://www.hotbit.io/exchange?symbol=STQ_ETH">STQ/ETH</ButtonEmpty>
              </div>
            </div>
            <div className="item">
              <img src={require('./img/coinbene.png')} />
              <div>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://www.coinbene.com/#/market?pairId=STQBTC">STQ/BTC</ButtonEmpty>
              </div>
            </div>
            <div className="item">
              <img src={require('./img/exmo.png')} className="no-margin" />
              <div>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://exmo.me/en/trade#?pair=STQ_BTC">STQ/BTC</ButtonEmpty>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://exmo.me/en/trade#?pair=STQ_USD">STQ/USD</ButtonEmpty>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://exmo.me/en/trade#?pair=STQ_EUR">STQ/EUR</ButtonEmpty>
                <ButtonEmpty wrapperClassName="no-margin-right" onClick={this.excludeEmail.bind(this)} href="https://exmo.me/en/trade#?pair=STQ_RUB">STQ/RUB</ButtonEmpty>
              </div>
            </div>
            <div className="item">
              <img src={require('./img/criptohub.png')} />
              <div>
                <ButtonEmpty onClick={this.excludeEmail.bind(this)} href="https://criptohub.com.br/storiqa">STQ/BRL</ButtonEmpty>
              </div>
            </div>
          </div>
        </Popup>}

        {/* isMerchPopup && <Popup maxWidth={970} onClose={this.hidePopup.bind(this)} transparent upClose>
          <div className="merch-popup" ref="mvpPopup">
            <img src={require('./img/merch.png')} className="merch hidden-xs-down" />
            <img src={require('./img/merch_small.png')} className="merch-small hidden-sm-up" />
            <a
              href="https://beta.storiqa.com/store/339"
              target="_blank"
              className="merch-button text-white open-sans-semibold"
            >
              BUY STORIQA T-SHIRTS
            </a>
          </div>
        </Popup> */}

        {isMerchPopup && <Popup maxWidth={800} onClose={this.hidePopup.bind(this)}>
          <div className="mvp-popup text-white" ref="mvpPopup">
            <div className="title">
              Storiqa (STQ)&nbsp;×&nbsp;KuCoin Trading&nbsp;Giveaway
            </div>
            <div className="title">
              Win&nbsp;6&nbsp;000&nbsp;000&nbsp;STQ +&nbsp;5&nbsp;BTC!
            </div>
            <p className="desc">Top 500&nbsp;accounts with the&nbsp;highest trading amount of&nbsp;STQ (buys&nbsp;+&nbsp;sells) on&nbsp;KuCoin will share 6&nbsp;000&nbsp;000&nbsp;STQ&nbsp;+&nbsp;5&nbsp;BTC as&nbsp;rewards!</p>
            <p className="desc">Activity&nbsp;time: 05.11.2018&nbsp;18:00:00&nbsp;~ 13.11.2018&nbsp;23:59:59 (UTC+8)</p>
            <div className="d-flex justify-content-center">
              <a
                href="https://www.kucoin.com/#/rank/STQ"
                target="_blank"
                className="exchange-button text-white open-sans-semibold"
              >
                Trade Now
              </a>
            </div>
          </div>
        </Popup>}

        {isTRPopup && <Popup maxWidth={800} onClose={this.hideTRPopup.bind(this)}>
          <div className="mvp-popup text-white" ref="mvpPopup">
            <div className="title">
              Buy more than 200&nbsp;000&nbsp;STQ and&nbsp;win iPhone&nbsp;XS
            </div>
            <p className="desc">From Oct,&nbsp;22 till Oct,&nbsp;29 buy more than 200&nbsp;000&nbsp;STQ at&nbsp;Sistemkoin and&nbsp;take a&nbsp;chance to&nbsp;win iPhone&nbsp;XS and football tickets for Galatasaray&nbsp;-&nbsp;Fenerbahçe</p>
            <div className="text">
              <p className="open-sans-semibold">Rules:</p>
              <p>
                <span className="rules-item">1)&nbsp;Buy more than 200&nbsp;000&nbsp;STQ at&nbsp;Sistemkoin during Oct,&nbsp;22&nbsp;-&nbsp;Oct,&nbsp;29</span>
                <span className="rules-item">2)&nbsp;Traders can buy&nbsp;STQ step by&nbsp;step</span>
                <span className="rules-item">3)&nbsp;Winners will be announced Oct,&nbsp;31</span>
                <span className="rules-item">4)&nbsp;Prizes will be distibuted Nov,&nbsp;1</span>
                <span className="rules-item">5)&nbsp;All winners must keep STQ on&nbsp;their balance to&nbsp;get the&nbsp;prize</span>
                <span className="rules-item">6)&nbsp;All winners are chosen randomly</span>
              </p>

              <p>There are 15&nbsp;winners:&nbsp;*<br />
              1&nbsp;iPhone&nbsp;XS<br />
              14&nbsp;Tickets for the&nbsp;match Galatasaray&nbsp;-&nbsp;Fenerbahçe</p>

              <p className="note">*&nbsp;All prizes will be given in&nbsp;BTC.</p>
            </div>
            <div className="d-flex justify-content-center">
              <a
                href="https://sistemkoin.com/"
                target="_blank"
                className="tr-exchange-button text-white open-sans-semibold"
              >
                Join Giveaway
              </a>
            </div>
          </div>
        </Popup>}

        {isJoinPopup && <Popup maxWidth={700} onClose={this.hidePopup.bind(this)}>
          <div ref="mvpPopup" className="join-popup text-white">
            <div className="text text-center">Thank you for&nbsp;joining!<br />You will receive the&nbsp;notification before start of&nbsp;the&nbsp;AMA&nbsp;stream!</div>
          </div>
        </Popup>}

        {/* <div ref="alert" className={classNames('mvp-alert text-white', {'mvp-alert-show': isMVPAlert})}>
          <button className="close" onClick={this.closeAlert.bind(this)}>
            <img src={require('./img/cross.svg')} alt="✕" />
          </button>
          <div className="title open-sans-semibold text-center">Beta Version MVP Released!</div>
          <div className="text text-center">Join Airdrop Program and Get&nbsp;Free&nbsp;STQ</div>
          <div className="d-flex justify-content-center">
            <a href="https://beta.storiqa.com/" target="_blank" className="try-demo-button text-white open-sans-semibold">Try Beta MVP</a>
          </div>
        </div> */}

        <MainInfoSection
          ICOMainInfo={ICOMainInfo}
          tryDemoURL={tryDemoURL}
          tokensData={tokensData}
          totalTokensAmount={totalTokensAmount}
          currencies={currencies}
          buyTokensURL={buyTokensURL}
          showTRPopup={this.showTRPopup.bind(this)}
          showAirdropPopup={this.showAirdropPopup.bind(this)}
          showMerchPopup={this.showMerchPopup.bind(this)}
          isTR={isTR}
          dataEnds={dataEnds}
        />

        <MediaSection />

        <NewsSection />

        {!isFinished && <WaysSection stage={stage} />}
        {isFinished && <PresentSection />}
        {isFinished && <CoreSection />}
        {isFinished && <InfrastructureSection />}

        <MarketSection />

        <SpaceSection />

        {isFinished && <Angle />}

        {isFinished && <NewRoadmapSection />}

        <TeamSection isFinished={isFinished} />

        {!isFinished && <DemandSection ICOMainInfo={ICOMainInfo} />}

        {false && <InWorkSection />}

        {!isFinished && <RoadmapSection />}

        <Angle dark />

        <PartnersSection />

        <SmartSection />

        <WhyBlockhainSection />

        <div ref="footer">
          <Footer
            tokensData={tokensData}
            ICOMainInfo={ICOMainInfo} />
        </div>
      </div>
    );
  }
}

App = withTranslate(App);

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
