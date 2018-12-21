/* eslint-disable max-len */

import React, {Component} from 'react';

import {ButtonEmpty} from 'components/common';

import './styles.sass';

class Exchange extends Component {
  render() {
    return (
      <div className="exchange-wrap">
        <div className="bg" />
        <div className="exchange">
          <div className="desc">STQ IS AVAILABLE ON FOLLOWING EXCHANGES</div>
          <div className="item">
            <img src={require('../../img/tokenomy.png')} />
            <div className="exchange-tokenomy-button">
              <ButtonEmpty href="https://exchange.tokenomy.com/market/STQBTC">STQ/BTC</ButtonEmpty>
              <ButtonEmpty href="https://exchange.tokenomy.com/market/STQSETH">STQ/ETH</ButtonEmpty>
              <ButtonEmpty href="https://exchange.tokenomy.com/market/STQTEN">STQ/TEN</ButtonEmpty>
            </div>
          </div>
          <div className="item">
            <img src={require('../../img/hitbtc2.png')} />
            <div>
              <ButtonEmpty href="https://hitbtc.com/STQ-to-BTC">STQ/BTC</ButtonEmpty>
              <ButtonEmpty href="https://hitbtc.com/STQ-to-USDT">STQ/USDT</ButtonEmpty>
              <ButtonEmpty href="https://hitbtc.com/STQ-to-ETH">STQ/ETH</ButtonEmpty>
            </div>
          </div>
          <div className="item">
            <img src={require('../../img/tidex2.png')} />
            <div>
              <ButtonEmpty href="https://tidex.com/exchange/stq/btc">STQ/BTC</ButtonEmpty>
              <ButtonEmpty href="https://tidex.com/exchange/stq/eth">STQ/ETH</ButtonEmpty>
            </div>
          </div>
          <div className="item">
            <img src={require('../../img/idex2.png')} />
            <div>
              <ButtonEmpty href="https://idex.market/eth/stq">STQ/ETH</ButtonEmpty>
            </div>
          </div>
          <div className="item">
            <img src={require('../../img/indodax.png')} />
            <div>
              <ButtonEmpty href="https://indodax.com/market/STQIDR">STQ/IDR</ButtonEmpty>
            </div>
          </div>
          <div className="item">
            <img src={require('../../img/hotbit.png')} />
            <div>
              <ButtonEmpty href="https://www.hotbit.io/exchange?symbol=STQ/BTC">STQ/BTC</ButtonEmpty>
              <ButtonEmpty href="https://www.hotbit.io/exchange?symbol=STQ/ETH">STQ/ETH</ButtonEmpty>
            </div>
          </div>
          <div className="item">
            <img src={require('../../img/coinbene.png')} />
            <div>
              <ButtonEmpty href="https://www.coinbene.com/#/market?pairId=STQBTC">STQ/BTC</ButtonEmpty>
            </div>
          </div>
          <div className="item">
            <img src={require('../../img/exmo.png')} className="no-margin" />
            <div>
              <ButtonEmpty href="https://exmo.me/en/trade#?pair=STQ_BTC">STQ/BTC</ButtonEmpty>
              <ButtonEmpty href="https://exmo.me/en/trade#?pair=STQ_USD">STQ/USD</ButtonEmpty>
              <ButtonEmpty href="https://exmo.me/en/trade#?pair=STQ_EUR">STQ/EUR</ButtonEmpty>
              <ButtonEmpty wrapperClassName="no-margin-right" href="https://exmo.me/en/trade#?pair=STQ_RUB">STQ/RUB</ButtonEmpty>
            </div>
          </div>
          <div className="item">
            <img src={require('../../img/criptohub.png')} />
            <div>
              <ButtonEmpty href="https://criptohub.com.br/storiqa">STQ/BRL</ButtonEmpty>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Exchange;
