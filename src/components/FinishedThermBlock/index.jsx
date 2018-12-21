/* eslint-disable max-len */

import React, {Component} from 'react';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';

import {ButtonEmpty} from 'components/common';

import './styles.sass';

const FinishedThermBlock = ({translate, footer}) => (
  <div className={classNames('collect-finished d-flex align-items-center flex-column d-lg-block', {['collect-finished-footer']: footer})}>
    <div>
      {footer && <div className="thermometer mt-5 mb-5 open-sans-semibold">
        <div className="right-hint">$25 {translate('finished.mln')}</div>
        <div className="hard-cap-top-hint">
          {translate('finished.hard_cap')}
        </div>
        <div className="thermometer-item left" />
      </div>}
      <div className="will-be-text open-sans-semibold mb-4">Storiqa token [STQ ticker] is also trading on exchanges:</div>
      <div className="d-flex flex-row">
        <div className={classNames('rialto-button double mr-1', {['double-footer']: footer})}>
          <div className="button">
            <ButtonEmpty href="#">
              <img
                className=""
                src={require('./img/tidex.png')}
                alt="Tidex"
              />
            </ButtonEmpty>
          </div>
          <div className="buttons">
            <div className="mr-1 text-center" title="STQ/BTC">
              <ButtonEmpty
                href="https://tidex.com/exchange/stq/btc"
                className="stq-btc-tidex"
              >
                <img
                  className=""
                  src={require('./img/tidex2.png')}
                  alt="Tidex"
                /><br />
                <span>STQ/BTC</span>
              </ButtonEmpty>
            </div>
            <div className="ml-1 text-center" title="STQ/ETH">
              <ButtonEmpty
                href="https://tidex.com/exchange/stq/eth"
                className="stq-eth-tidex"
              >
                <img
                  className=""
                  src={require('./img/tidex2.png')}
                  alt="Tidex"
                /><br />
                <span>STQ/ETH</span>
              </ButtonEmpty>
            </div>
          </div>
        </div>
        <div className="rialto-button ml-1" title="Idex">
          <ButtonEmpty href="https://idex.market/eth/stq">
            <img
              className=""
              src={require('./img/idex.png')}
              alt="Idex"
            />
          </ButtonEmpty>
        </div>
      </div>
    </div>
  </div>
);

export default withTranslate(FinishedThermBlock);
