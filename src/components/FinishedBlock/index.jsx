/* eslint-disable max-len */

import React, {Component} from 'react';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';

import FinishedThermBlock from 'components/FinishedThermBlock';

import {ButtonEmpty} from 'components/common';

import {withdrawURL, moreInfoURL} from 'helpers/constants';

import './styles.sass';

const FinishedBlock = ({translate}) => (
  <div className="finished-block text-white d-md-flex flex-column flex-md-row flex-xl-column">
    <div className="info-block">
      <div className={classNames('slider-item-wrapper text-center d-flex justify-content-center')}>
        <div className="slide-wrapper">
          <div className="slide d-flex align-items-stretch flex-column p-3">
            <div className="token-sale-text open-sans-semibold mt-2">{translate('finished.token_sale')}</div>
            <div className="is-finished-text open-sans-extrabold">{translate('finished.is_finished')}</div>
            <div className="more-info-link open-sans-semibold mt-1">
              <a href={moreInfoURL} target="_blank">{translate('finished.more_info')}</a>
            </div>
            <a href={withdrawURL} className="text-white withdraw-button open-sans-bold mt-4 mb-2" target="_blank">
              Withdraw your STQ tokens
            </a>
            <div className="hard-cap-sum open-sans-semibold">$25,000,000</div>
            <div className="reached-text open-sans-semibold">{translate('finished.hard_cap_reached')}</div>
            <div className="horizontal-line mt-3 mb-3" />
            <div className="holders-amount-text open-sans-semibold">{translate('finished.token_holders_amount')}</div>
          </div>
        </div>
      </div>
    </div>
    <FinishedThermBlock />
  </div>
);

export default withTranslate(FinishedBlock);
