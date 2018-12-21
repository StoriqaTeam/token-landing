/* eslint-disable max-len */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withTranslate} from 'react-redux-multilingual';
import axios from 'axios';
import {find} from 'lodash';

import Countdown from 'components/Countdown';

import api from 'helpers/api';
import {STQ_ETH_RATE} from 'helpers/constants';
import formatNumber from 'helpers/formatNumber';
import {totalSTQOld, totalETHOld, totalUSDOld} from 'helpers/oldCurrencyData';

import './styles.sass';

class InvestedSum extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     eths: undefined,
  //     ICOMainInfo: {},
  //     tokensData: {}
  //   };
  // }

  render() {
    const {translate, tokensData, ICOMainInfo} = this.props;

    const stage = find(ICOMainInfo.ico_stages, {'id': ICOMainInfo.current_stage_id});
    const dataEnds = stage ? stage.date_end : undefined;
    const tokensDataLength = Object.keys(tokensData).length;

    const totalSTQ = Math.round((Number(tokensData.total) + totalSTQOld) * 100 / 60);
    const totalUSD = (Number(tokensData.amount) + totalUSDOld) / 1000000;

    const investWidth = totalUSD * 100 / 25;
    const ICOWidth = 100 - investWidth;

    return (
      <div className="invested-wrapper mt-5 pt-4">
        {tokensDataLength &&
          <div>
            <div className="row d-flex justify-content-center">
              <div className="col-12 thermometer-wrap d-flex align-items-end">
                <div className="thermometer">
                  <div className="thermometer-item pre-ico" style={{width: `${investWidth}%`}}>
                    <div className="pen">
                      <span className="dollars">$ {formatNumber(totalUSD).replace(',', '.')} mln</span>
                      <span className="tokens">Issued: {formatNumber(totalSTQ)} STQ</span>
                    </div>
                  </div>
                  <div className="thermometer-item ico" style={{width: `${ICOWidth}%`}}></div>
                  <div className="signature soft-cap text-left">
                    <div className="text">
                      <span className="hint">Soft cap </span>
                      <div className="hidden-md-up" />
                      <span className="count">$ 5 mln</span>
                    </div>
                    <img className="icon d-inline-block d-md-block hidden-sm-down" src={require('./img/soft.svg')} />
                    <img className="icon d-inline-block d-md-block hidden-md-up" src={require('./img/soft_m.svg')} />
                  </div>
                  <div className="signature hard-cap text-left">
                    <div className="text">
                      <span className="hint">Hard cap </span>
                      <div className="hidden-md-up" />
                      <span className="count">$ 25 mln</span>
                    </div>
                    <img className="icon d-inline-block d-md-block hidden-sm-down" src={require('./img/soft.svg')} />
                    <img className="icon d-inline-block d-md-block hidden-md-up" src={require('./img/soft_m.svg')} />
                  </div>
                  {/* <div className="signature hard-cap text-right">
                    <div className="hint">Hard cap</div>
                    <div className="count">$ 25 mln</div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tokens: state.tokens,
  eths: state.eths
});

export default connect(mapStateToProps)(withTranslate(InvestedSum));
