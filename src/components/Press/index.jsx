/* eslint-disable max-len */

import React, {Component} from 'react';
import {withTranslate} from 'react-redux-multilingual';

import './styles.sass';

class Press extends Component {
  render() {
    const {translate} = this.props;

    return (
      <section className="section-press pt-4 pb-4">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="d-flex align-items-center justify-content-center col-6 col-md-4 col-lg-3 text-right">
              <a href="https://www.coinspeaker.com/2017/10/02/real-businesses-take-off-cryptospace-kickico-welcomes-board-3-large-ico-campaigns/" target="_blank">
                <img src={require('./img/coinspeaker.png')} alt="Coinspeaker" className="" />
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-center col-6 col-md-4 col-lg-3 text-right">
              <a href="https://www.cryptocoinsnews.com/?s=Storiqa&category_name=&submit=Search" target="_blank">
                <img src={require('./img/cryptocoinsnews.png')} alt="Cryptocoinsnews" className="" />
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-center col-6 col-md-4 col-lg-3 text-left">
              <a href="https://cointelegraph.com/search?query=storiqa" target="_blank">
                <img src={require('./img/cointelegraph.png')} alt="Cointelegraph" className="" />
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-center col-6 col-md-6 col-lg-3 text-right">
              <a href="http://www.newsbtc.com/2017/11/24/blockchain-powered-marketplace-storiqa/" target="_blank">
                <img src={require('./img/newsbtc.png')} alt="Newsbtc" className="" />
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-center col-6 col-md-6 col-lg-2 text-right">
              <a href="http://irishtechnews.ie/business-showcase-storiqa/" target="_blank">
                <img src={require('./img/irishtechnews.png')} alt="Irishtechnews" className="" />
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-center col-6 col-md-4 col-lg-2 text-right">
              <a href="https://coinidol.com/creating-online-trading-platform-with-ico-fundraising/" target="_blank">
                <img src={require('./img/coinidol.png')} alt="Coinidol" className="" />
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-center col-6 col-md-4 col-lg-2 text-right">
              <a href="https://btcmanager.com/storiqa-brings-e-commerce-blockchain/" target="_blank">
                <img src={require('./img/btcmanager.png')} alt="Btcmanager" className="" />
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-center col-6 col-md-4 col-lg-2 text-right">
              <a href="http://www.the-blockchain.com/2017/11/17/storiqa-makes-cryptocurrency-closer-world-usual-e-shop-peculiarities-unusual-currency/" target="_blank">
                <img src={require('./img/theblockchain.png')} alt="Theblockchain" className="" />
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-center col-6 col-md-6 col-lg-2 text-right">
              <a href="http://bitcoinist.com/growing-local-business-online-through-storiqa-and-blockchain-technology/" target="_blank">
                <img src={require('./img/bitcoinist.png')} alt="Bitcoinist" className="" />
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-center col-6 col-md-6 col-lg-3 text-right">
              <a href="https://bitnovosti.com/?s=storiqa&x=0&y=0" target="_blank">
                <img src={require('./img/bitnovosti.png')} alt="Bitnovosti" className="" />
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-center col-6 col-md-4 col-lg-3 text-right">
              <a href="https://www.toutiao.com/i6493358406529712654/" target="_blank">
                <img src={require('./img/toutiao.png')} alt="Toutiao" className="" />
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-center col-6 col-md-4 col-lg-3 text-right">
              <a href="https://news.bitcoin.com/pr-storiqa-is-starting-to-expand-new-trend-in-e-commerce-worldwide/" target="_blank">
                <img src={require('./img/newsbitcoincom.png')} alt="Newsbitcoincom" className="" />
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-center col-6 col-md-4 col-lg-3 text-right">
              <a href="https://www.huffingtonpost.com/entry/changes-in-ecommerce-with-blockchain-implementation_us_5a28e80de4b09ee35b8ae66b" target="_blank">
                <img src={require('./img/huffingtonpost.png')} alt="Huffingtonpost" className="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslate(Press);
