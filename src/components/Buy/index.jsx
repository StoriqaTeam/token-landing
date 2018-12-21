import React, {Component} from 'react';
import {withTranslate} from 'react-redux-multilingual';
import copy from 'copy-to-clipboard';

import Footer from 'components/Footer';
import Header from 'components/Header';
import {TOKEN_CODE, STQ_ETH_RATE, MIN_BUY, STQ_TOKEN_ADDRESS} from 'helpers/constants';

import {started} from 'helpers/constants';
import formatNumber from 'helpers/formatNumber';
import api from 'helpers/api';

import './styles.sass';

let timer;

class Buy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCopied: false,
      address: localStorage.getItem('address'),
      loaded: false
    };
  }

  componentWillMount() {
    this.getAddress();
  }

  componentWillUnmount() {
    clearInterval(timer);
  }

  getAddress() {
    api().get('/address')
      .then(({data}) => {
        localStorage.setItem('address', data);

        this.setState({address: data, loaded: true});
      })
      .catch(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('address');

        this.props.history.replace('/auth');
      });
  }

  onCopy() {
    clearInterval(timer);

    this.setState({isCopied: true});

    timer = setInterval(() => {
      this.setState({isCopied: false});
    }, 3000);

    copy(this.state.address);
  }

  render() {
    const {translate} = this.props;
    const {address, loaded} = this.state;

    return (loaded &&
      <div className="buy">
        <Header className="black" />
        <section className="container">
          <div className="buy-body">
            <h1>{translate('buy.send_eth')}</h1>
            <p className="text-center">{translate('buy.address')}</p>
            <div className="eth-wallet">{address}</div>
            <div className="button-block">
              <button className="copy" onClick={this.onCopy.bind(this)}>{translate('buy.copy')}</button>
              {this.state.isCopied && <div className="copy-text">{translate('buy.copied')}</div>}
            </div>
            <div className="warning">
              {translate('buy.warning.text').map((p, i) =>
                <p key={i}>{p}</p>
              )}

              <ul className="mb-3">
                {translate('buy.warning.wallets').map((li, i) =>
                  <li key={i} className="mb-1" dangerouslySetInnerHTML={{__html: li}} />
                )}
              </ul>
              <div>More information: <a href="http://help.storiqa.com" target="_blank">FAQ</a></div>
            </div>
            <div className="table text-center text-md-left">
              <div className="row">
                <div className="col-md-6">{translate('buy.start_rate')}</div>
                <div className="col-md-6"><b>1 ETH = {formatNumber(STQ_ETH_RATE)} {TOKEN_CODE}</b></div>
              </div>
              <div className="row">
                <div className="col-md-6">{translate('buy.min_buy')}</div>
                <div className="col-md-6"><b>{MIN_BUY / STQ_ETH_RATE} ETH</b></div>
              </div>
              <div className="row">
                <div className="col-md-6">{translate('buy.blockchain')}</div>
                <div className="col-md-6"><b>Ethereum</b></div>
              </div>
            </div>
            <div className="token-information">
              <p className="mb-5 text-center"><b>Token Information</b></p>
              <p>How to add STQ using myetherwallet.com?</p>

              <p>To add STQ tokens to your wallet enter your Ethereum wallet
              (usually <a href="https://myetherwallet.com/#send-transaction" target="_blank">
                  https://.myetherwallet.com/#send-transaction
                </a>) and select «Add custom token».</p>
              <p>You will see three fields: token name, address and decimals.</p>

              <div className="table text-center text-md-left">
                <div className="row">
                  <div className="col-md-5">Address</div>
                  <div className="col-md-7">
                    <b style={{overflowWrap: 'break-word'}}>{STQ_TOKEN_ADDRESS}</b>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5">Token name</div>
                  <div className="col-md-7"><b>STQ</b></div>
                </div>
                <div className="row">
                  <div className="col-md-5">Decimals</div>
                  <div className="col-md-7"><b>18</b></div>
                </div>
              </div>

              <p>After that, click «Save» and you will see your STQ balance.</p>
            </div>
          </div>
        </section>
        <Footer className="black" isContribute={true} />
      </div>
    );
  }
}

export default withTranslate(Buy);
