/* eslint-disable max-len */

import React, {Component} from 'react';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';
// import MediaQuery from 'react-responsive';
// import MediaQuery from 'react-responsive';
// import {TwitterTweetEmbed} from 'react-twitter-embed';
//
// import Stream from 'components/Stream';
// import CountdownBlock from 'components/CountdownBlock';
// import FinishedBlock from 'components/FinishedBlock';
import Language from 'components/Language';
import Preorder from 'components/Preorder';
import {ButtonEmpty} from 'components/common';
import Countdown from 'components/Countdown';

import {totalUSDOld, USDInvest} from 'helpers/oldCurrencyData';

import isMobile from 'helpers/isMobile';

class MainInfoSection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showPopupFor: null,
      isTweet: false,
      isReasons: false,
      isInnovative: false,
      isReasonsBottomIcon: true,
      isInnovativeBottomIcon: true,
      tooltip: '',
      welcomeScreenShown: true
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('touchend', this.handleClickOutside);
    // document.getElementById('tweet-wrap').addEventListener('DOMSubtreeModified', this.listenerTweetWrap.bind(this));
    // window.addEventListener('resize', this.listenerTweetWrap.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('touchend', this.handleClickOutside);

    // if (document.getElementById('tweet-wrap')) {
    //   document.getElementById('tweet-wrap').removeEventListener('DOMSubtreeModified', this.listenerTweetWrap.bind(this));
    // }

    // window.removeEventListener('resize', this.listenerTweetWrap.bind(this));
  }

  // listenerTweetWrap() {
  //   const elem = document.querySelector('#twitter-widget-0');
  //
  //   if (elem) {
  //     const root = elem.localName === 'iframe' ? elem.contentWindow.document : elem.shadowRoot;
  //     const EmbeddedTweet = root.querySelector('.EmbeddedTweet');
  //
  //     if (EmbeddedTweet) {
  //       EmbeddedTweet.style.backgroundColor = 'transparent';
  //       EmbeddedTweet.style.color = 'white';
  //       EmbeddedTweet.style.border = '1px solid rgba(255,255,255,.5)';
  //
  //       if (document.documentElement.clientWidth < 390) {
  //         EmbeddedTweet.style.width = '220px';
  //       }
  //     }
  //
  //     const EmbeddedTweetTweet = root.querySelector('.EmbeddedTweet-tweet');
  //
  //     if (EmbeddedTweetTweet) {
  //       EmbeddedTweetTweet.style.border = '0';
  //     }
  //
  //     const MediaCardMedia = root.querySelector('.MediaCard-media');
  //
  //     if (MediaCardMedia) {
  //       MediaCardMedia.style.display = 'none';
  //     }
  //
  //     // const TweetActions = root.querySelector('.Tweet-actions');
  //
  //     // if (TweetActions) {
  //     //   TweetActions.style.display = 'block';
  //     //   TweetActions.style.whiteSpace = 'normal';
  //     // }
  //
  //     // const TweetAction = root.querySelector('.TweetAction');
  //
  //     // if (TweetAction) {
  //     //   TweetAction.style.display = 'block';
  //     // }
  //
  //     // const TweetActionStat = root.querySelector('.TweetAction-stat');
  //
  //     // if (TweetActionStat) {
  //     //   TweetActionStat.style.whiteSpace = 'normal !important';
  //     // }
  //
  //     this.setState({isTweet: true});
  //   }
  // }

  handleClickOutside(e) {
    this.setState({showPopupFor: null});
    const currentTarget = e.currentTarget.id;
    if (currentTarget !== 'sell' && currentTarget !== 'monetize' && currentTarget !== 'fake') {
      this.setState({tooltip: ''});
    }
  }

  handleToggleReasons() {
    this.setState({
      isReasons: !this.state.isReasons,
      // isReasonsBottomIcon: false
    });
  }

  handleToggleInnovative() {
    this.setState({
      isInnovative: !this.state.isInnovative,
      // isInnovativeBottomIcon: false
    });
  }

  handlerTooltips(e) {
    this.setState({tooltip: e.currentTarget.id});
  }

  render() {
    const {translate, isTR, dataEnds} = this.props;
    const {tooltip} = this.state;
    const isFinished = true;

    return (
      <section className={classNames('main-info-block section-hero container-fluid text-center')}>
        <div className="bg" />
        <div className="container container-wide">
          <div className="row main-block-wrapper">
            <div className="col-12 col-xl-9 left-info-block d-flex align-items-center">
              <div className="ico-block">
                {!isFinished && <div className="mb-4">
                  <Language />
                </div>}
                <div className="d-flex align-items-center">
                  <div>
                    <div className="title text-center text-md-left text-white mb-3">
                      <span>#1&nbsp;</span>
                      {/* <span className="cross">
                        Amazon
                        <span className="line1" />
                        <span className="line2"/>
                      </span> */}
                      {translate('main_info_section.crypto_marketplace')}
                    </div>
                    <div className="open-sans-semibold ico-text text-white text-center text-md-left pt-3 mt-4">
                      Sell and buy goods with cryptocurrencies.<br />No financial borders, extra fees and fake reviews anymore.
                    </div>
                  </div>
                </div>
                {/*
                  <div className="dead-deadline d-md-flex align-items-md-center">
                    <div className="text mr-md-4 text-md-left open-sans-bold">PLATFORM PRE-LAUNCH:</div>
                    <Countdown dataEnds={dataEnds} />
                  </div>
                */}

                  <div className="dead-deadline d-md-flex align-items-md-center">
                    {dataEnds &&<div className="giveaway-line-wrap">
                      <ButtonEmpty onClick={this.props.showMerchPopup} filled className="giveaway-button">7+ BTC GIVEAWAY</ButtonEmpty>
                      <div className="ends-text">ENDS IN:</div>
                      <Countdown
                        withoutText
                        dataEnds={dataEnds}
                      />
                    </div>}
                    {/* <ButtonEmpty href="https://beta.storiqa.com" className="try-button">Try Storiqa Marketplace</ButtonEmpty> */}
                  </div>

                {/* <div className="mt-5 main-info-buttons">
                  <div className="row">
                    <div className="col-md-6">
                      <Preorder start />
                    </div>
                    <div className="col-md-6 text-left">
                      <div className="telegram-block mt-3 mt-md-0 d-flex justify-content-center justify-content-md-start">
                        <a href={translate('main_info_section.telegram_link')} target="_blank" className="icon telegram" title="Storiqa Community">
                          <img
                            className="telegram-icon"
                            src={require('./img/icon-telegram.svg')}
                            alt="Telegram Logo"
                          />
                          <span className="text-white d-inline-block ml-3">{translate('main_info_section.telegram')}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="row mt-5">
                  {/* <div className="col-12 col-md-12 d-flex flex-md-row flex-column justify-content-md-start align-items-center">
                    <div
                      className="win-iphone-button text-white open-sans-semibold"
                      onClick={this.props.showWinIphonePopup}
                    >Win iPhone X</div>
                    <div
                      className="join-airdrop-button text-white open-sans-semibold mt-5 mt-md-0 ml-0 ml-md-5"
                      onClick={this.props.showAirdropPopup}
                    >Join Airdrop</div>
                  </div> */}
                  <div className={classNames('col-12 mt-5 mt-md-0', {'col-md-7': isTR})}>
                    {/* <div className="appeal text-white text-left">Join us for recieving latest news about project:</div> */}
                    <div className="text-white text-center text-md-left d-flex">
                      <Preorder airdrop />
                    </div>
                  </div>
                  {/* <div className="col-12 col-md-5 mt-5 mt-md-0 d-flex justify-content-center">
                    <div
                      className="tr-button text-white open-sans-semibold"
                      onClick={this.props.showTRPopup}
                    >Iphone XS Giveaway</div>
                  </div> */}
                </div>
                <div className="reasons-features row text-white mt-5 pt-4">
                  <div id="sell" className="col-12 col-md-4 item text-center" onClick={this.handlerTooltips.bind(this)}>
                    <img src={require('./img/cart.svg')} />
                    <br />SELL AND BUY GOODS<br />WITH CRYPTOCURRENCIES
                    {tooltip === 'sell' && <div className="bottom-tooltip">Multicurrency wallet allows you to pay crypto along with common currencies.</div>}
                  </div>
                  <div id="monetize" className="col-12 col-md-4 item text-center mt-5 mt-md-0" onClick={this.handlerTooltips.bind(this)}>
                    <img src={require('./img/horn.svg')} />
                    <br />MONETIZE YOUR<br />REVIEWS
                    {tooltip === 'monetize' && <div className="bottom-tooltip">Traffic monetization for bloggers with referral links leads to sales increase for sellers.</div>}
                  </div>
                  <div id="fake" className="col-12 col-md-4 item text-center mt-5 mt-md-0" onClick={this.handlerTooltips.bind(this)}>
                    <img src={require('./img/plate.svg')} />
                    <br />NO FAKE &<br />PAID REVIEWS
                    {tooltip === 'fake' && <div className="bottom-tooltip">Reviews based on blockchain ensure trust and transparency.</div>}
                  </div>
                </div>
              </div>
            </div>
            <div className="iframe-block col-12 col-xl-3">
              <div className="iframe-wrap d-flex justify-content-center mt-4 mt-xl-0">
                <div className="iframe-wrap-wrap">
                  <div className="iframe-wrap-wrap-wrap">
                    {isMobile ?
                      <a href="https://invis.io/KENHOA3NVYJ" target="_blank">
                        <img src={require('./img/prototype.png')} />
                      </a> :
                      <iframe
                        id="iframe"
                        className="iframe"
                        src="https://invis.io/KENHOA3NVYJ"
                      />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslate(MainInfoSection);
