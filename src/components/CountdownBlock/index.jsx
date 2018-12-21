/* eslint-disable max-len */

import React, {Component} from 'react';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';
import {find, get} from 'lodash';

import Countdown from 'components/Countdown';
import {Spiner} from 'components/common';

import {totalSTQOld, totalETHOld, totalUSDOld, USDInvest} from 'helpers/oldCurrencyData';
import formatNumber from 'helpers/formatNumber';

import './styles.sass';

class CountdownBlock extends Component {
  render() {
    const {ICOMainInfo, tokensData, translate, totalTokensAmount} = this.props;
    const stage = find(ICOMainInfo.ico_stages, {'id': ICOMainInfo.current_stage_id});

    const coinPrice = get(stage, 'coin_price', undefined);
    const bonusPreferences = get(stage, 'bonus_preferences[0].bonus_percent', undefined);
    const dataEnds = get(stage, 'date_end', undefined);

    const buyTokensURL = `https://tokensale.storiqa.com/users/sign_up${location.search}`;
    const totalUSD = Math.round(Number(tokensData.amount) + totalUSDOld + USDInvest);
    const totalSTQ = Math.round((Number(totalTokensAmount) + totalSTQOld));

    const milestoneAmount = totalUSD < 22000000 ? 22000000 : 25000000;

    const leftWidth = totalUSD < milestoneAmount ? totalUSD * 100 / milestoneAmount : 100;
    const rightWidth = 100 - leftWidth;

    const softCapHintLeft = 5.6 * 100000000 / milestoneAmount;
    const milestoneValue = totalUSD < 22000000 ? `${translate('main_info_section.count_down_block.milestone')} 8` : translate('main_info_section.count_down_block.hard_cap');

    return (
      <div className="right-block text-white d-md-flex flex-column flex-md-row flex-xl-column">
        <div className="info-block">
          <div className={classNames('slider-item-wrapper text-center d-flex justify-content-center')}>
            <div className="slide-wrapper-active">
              <div className="slide d-flex align-items-stretch flex-column p-2">
                <div className="top">
                  <Countdown stageName={stage ? stage.name : 'Stage'} dataEnds={dataEnds} />
                </div>
                <div className="bottom d-flex align-items-stretch justify-content-between flex-column">
                  <div className="up d-flex align-items-start flex-row">
                    {coinPrice && <div className="token-price"><span className="label">{translate('main_info_section.count_down_block.price')}:</span><br /><span className="value">${coinPrice}</span></div>}
                    {bonusPreferences && <div className="bonus"><span className="label">{translate('main_info_section.count_down_block.bonus')}:</span><br /><span className="value">{bonusPreferences}%</span></div>}
                  </div>
                  <div className="down d-flex align-items-end">
                    <a href={buyTokensURL} className="tokens-button btn btn-primary btn-lg blue open-sans-bold" target="_blank">
                      {translate('main_info_section.count_down_block.buy_stq')}
                    </a>
                  </div>
                  <div className="bottom-text open-sans-semibold">{translate('main_info_section.count_down_block.accept_curr')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="collect d-flex align-items-center flex-column d-lg-block">
          {Boolean(Object.keys(tokensData).length) && <div>
            <div className="amount">${totalUSD ? formatNumber(totalUSD) : ' '}</div>
            <div className="label">{translate('main_info_section.count_down_block.collected')}</div>
            <div className="thermometer mt-5">
              {/* <div className="left-hint">{translate('main_info_section.count_down_block.stage')} 7</div> */}
              <div className="right-hint">{`$${milestoneAmount / 1000000}`} {translate('main_info_section.count_down_block.mln')}</div>
              <div className="right-bottom-hint">{milestoneValue}</div>
              <div className="soft-cap-top-hint" style={{left: `${softCapHintLeft - 3}%`}}>
                $5 {translate('main_info_section.count_down_block.mln')}
              </div>
              {totalUSD && <div className="soft-cap-hint" style={{left: `${softCapHintLeft}%`}}>
                <div><span>✓</span> {translate('main_info_section.count_down_block.soft_cap')}</div>
              </div>}
              <div className="thermometer-item left" style={{width: `${leftWidth}%`}} />
              <div className="thermometer-item right" style={{width: `${rightWidth}%`}} />
            </div>
            <div className="stq-amount">{totalSTQ ? formatNumber(totalSTQ) : ' '}</div>
            <div className="label">{translate('main_info_section.count_down_block.stq_amount')}</div>
          </div>}

          {!Boolean(Object.keys(tokensData).length) && <Spiner />}
        </div>
      </div>
    );
  }
}

export default withTranslate(CountdownBlock);
