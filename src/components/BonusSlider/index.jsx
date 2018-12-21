/* eslint-disable max-len */

import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {withTranslate} from 'react-redux-multilingual';
import SliderSlick from 'react-slick';
import classNames from 'classnames';
import {find} from 'lodash';

import Countdown from 'components/Countdown';

import {totalETHOld} from 'helpers/oldCurrencyData';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './styles.sass';

const bonuses = [{
  id: 1,
  period: '18 Oct — 24 Oct',
  tokenPrice: '',
  bonus: '',
  tokenSale: true
}, {
  id: 1,
  period: '28 Nov — 05 Dec',
  tokenPrice: '0.003',
  bonus: '20'
}, {
  id: 2,
  period: '05 Dec — 12 Dec',
  tokenPrice: '0.0036',
  bonus: '18'
}, {
  id: 3,
  period: '12 Dec — 19 Dec',
  tokenPrice: '0.0042',
  bonus: '16'
}, {
  id: 4,
  period: '19 Dec — 26 Dec',
  tokenPrice: '0.0048',
  bonus: '14'
}, {
  id: 5,
  period: '26 Dec — 02 Jan',
  tokenPrice: '0.0054',
  bonus: '12'
}, {
  id: 6,
  period: '02 Jan — 09 Jan',
  tokenPrice: '0.006',
  bonus: '10'
}, {
  id: 7,
  period: '09 Jan — 16 Jan',
  tokenPrice: '0.007',
  bonus: '8'
}, {
  id: 8,
  period: '16 Jan — 23 Jan',
  tokenPrice: '0.008',
  bonus: '6'
}, {
  id: 9,
  period: '23 Jan — 30 Jan',
  tokenPrice: '0.009',
  bonus: '4'
}, {
  id: 10,
  period: '30 Jan — 06 Feb',
  tokenPrice: '0.01',
  bonus: '2'
}, {
  id: 11,
  period: '06 Feb — 13 Feb',
  tokenPrice: '0.015',
  bonus: '0'
}];

const currencies = ['BTC', 'ETH', 'LTC', 'USDT', 'DASH', 'NEO', 'BCH', 'BCC', 'QTUM', 'STRAT', 'DOGE'];

const SampleNextArrow = (props) => {
  return (
    <div
      className="arrow next-arrow"
      onClick={props.onClick}></div>
  );
};

const SamplePrevArrow = (props) => {
  return (
    <div
      className="arrow prev-arrow"
      onClick={props.onClick}></div>
  );
};

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  // responsive: [{
  //   breakpoint: 767,
  //   settings: {
  //     vertical: true
  //   }
  // }, {
  //   breakpoint: 992,
  //   settings: {
  //     slidesToShow: 3,
  //     slidesToScroll: 3,
  //     vertical: false
  //   }
  // }, {
  //   breakpoint: 1200,
  //   settings: {
  //     slidesToShow: 2,
  //     slidesToScroll: 2,
  //     vertical: false
  //   }
  // }],
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  // vertical: true,
  // verticalSwiping: true,
  // variableWidth: true
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      initialSlide: 1,
      // variableWidth: true
    }
  }]
};

const settings2 = {
  dots: true,
  infinite: false,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true
};

class Slider extends Component {
  render() {
    const {ICOMainInfo} = this.props;
    const stage = find(ICOMainInfo.ico_stages, {'id': ICOMainInfo.current_stage_id});
    const dataEnds = stage ? stage.date_end : undefined;
    const buyTokensURL = `https://tokensale.storiqa.com/users/sign_up${location.search}`;

    return (
      <div className="slider-bonus text-white">
        <SliderSlick {...settings}>
          {/* <div className={classNames('slider-item-wrapper text-center d-flex justify-content-center')}>
            <div className="slide-wrapper">
              <div className="slide d-flex align-items-stretch flex-column p-2 disabled">
                <div className="period">18 Oct — 24 Oct</div>
                <div className="ts d-flex justify-content-center align-items-center mb-2">Token<br />Pre-Sale</div>
              </div>
            </div>
            <div className="slide-wrapper">
              <div className="slide d-flex align-items-stretch flex-column p-2 disabled">
                <div className="period">28 Nov — 05 Dec</div>
                <div className="bottom d-flex justify-content-center align-items-center flex-column">
                  <div className="token-price"><span className="label">Token price:</span><br /><span className="value">$0.003</span></div>
                  <div className="bonus mt-2"><span className="label">Bonus:</span><br /><span className="value">20%</span></div>
                </div>
              </div>
            </div>
          </div> */}

          <div className={classNames('slider-item-wrapper text-center d-flex justify-content-center')}>
            <div className="slide-wrapper">
              <div className="slide d-flex align-items-stretch flex-column p-2 disabled">
                <div className="period">28 Nov — 05 Dec</div>
                <div className="bottom d-flex justify-content-center align-items-center flex-column">
                  <div className="token-price"><span className="label">Token price:</span><br /><span className="value">$0.003</span></div>
                  <div className="bonus mt-2"><span className="label">Bonus:</span><br /><span className="value">20%</span></div>
                </div>
                <div className="finish-wrap">Finished</div>
              </div>
            </div>
            <div className="slide-wrapper">
              <div className="slide d-flex align-items-stretch flex-column p-2 disabled">
                <div className="period">05 Dec — 12 Dec</div>
                <div className="bottom d-flex justify-content-center align-items-center flex-column">
                  <div className="token-price"><span className="label">Token price:</span><br /><span className="value">$0.0036</span></div>
                  <div className="bonus mt-2"><span className="label">Bonus:</span><br /><span className="value">18%</span></div>
                </div>
                <div className="finish-wrap">Finished</div>
              </div>
            </div>
          </div>

          <div className={classNames('slider-item-wrapper text-center d-flex justify-content-center')}>
            <div className="slide-wrapper-active">
              <div className="slide d-flex align-items-stretch flex-column p-2">
                <div className="top">
                  <div className="period mb-2">
                    12 Dec — 19 Dec
                  </div>
                  <Countdown stageName={stage ? stage.name : 'Stage'} dataEnds={dataEnds} />
                </div>
                <div className="bottom d-flex align-items-stretch flex-column">
                  <div className="up d-flex align-items-start flex-row">
                    <div className="token-price"><span className="label">Today token price:</span><br /><span className="value">$0.0042</span></div>
                    <div className="bonus"><span className="label">Bonus:</span><br /><span className="value">16%</span></div>
                  </div>
                  <div className="down d-flex align-items-end">
                    <a href={buyTokensURL} className="tokens-button btn btn-primary btn-lg blue" target="_blank">
                      <b>Buy STQ Now</b>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={classNames('slider-item-wrapper text-center d-flex justify-content-center')}>
            <div className="slide-wrapper">
              <div className="slide d-flex align-items-stretch flex-column p-2">
                <div className="period">19 Dec — 26 Dec</div>
                <div className="bottom d-flex justify-content-center align-items-center flex-column">
                  <div className="token-price"><span className="label">Token price:</span><br /><span className="value">$0.0048</span></div>
                  <div className="bonus mt-2"><span className="label">Bonus:</span><br /><span className="value">14%</span></div>
                </div>
              </div>
            </div>
            <div className="slide-wrapper">
              <div className="slide d-flex align-items-stretch flex-column p-2">
                <div className="period">26 Dec — 02 Jan</div>
                <div className="bottom d-flex justify-content-center align-items-center flex-column">
                  <div className="token-price"><span className="label">Token price:</span><br /><span className="value">$0.0054</span></div>
                  <div className="bonus mt-2"><span className="label">Bonus:</span><br /><span className="value">12%</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className={classNames('slider-item-wrapper text-center d-flex justify-content-center')}>
            <div className="slide-wrapper">
              <div className="slide d-flex align-items-stretch flex-column p-2">
                <div className="period">02 Jan — 09 Jan</div>
                <div className="bottom d-flex justify-content-center align-items-center flex-column">
                  <div className="token-price"><span className="label">Token price:</span><br /><span className="value">$0.006</span></div>
                  <div className="bonus mt-2"><span className="label">Bonus:</span><br /><span className="value">10%</span></div>
                </div>
              </div>
            </div>
            <div className="slide-wrapper">
              <div className="slide d-flex align-items-stretch flex-column p-2">
                <div className="period">09 Jan — 16 Jan</div>
                <div className="bottom d-flex justify-content-center align-items-center flex-column">
                  <div className="token-price"><span className="label">Token price:</span><br /><span className="value">$0.007</span></div>
                  <div className="bonus mt-2"><span className="label">Bonus:</span><br /><span className="value">8%</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className={classNames('slider-item-wrapper text-center d-flex justify-content-center')}>
            <div className="slide-wrapper">
              <div className="slide d-flex align-items-stretch flex-column p-2">
                <div className="period">16 Jan — 23 Jan</div>
                <div className="bottom d-flex justify-content-center align-items-center flex-column">
                  <div className="token-price"><span className="label">Token price:</span><br /><span className="value">$0.008</span></div>
                  <div className="bonus mt-2"><span className="label">Bonus:</span><br /><span className="value">6%</span></div>
                </div>
              </div>
            </div>
            <div className="slide-wrapper">
              <div className="slide d-flex align-items-stretch flex-column p-2">
                <div className="period">23 Jan — 30 Jan</div>
                <div className="bottom d-flex justify-content-center align-items-center flex-column">
                  <div className="token-price"><span className="label">Token price:</span><br /><span className="value">$0.009</span></div>
                  <div className="bonus mt-2"><span className="label">Bonus:</span><br /><span className="value">4%</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className={classNames('slider-item-wrapper text-center d-flex justify-content-center')}>
            <div className="slide-wrapper">
              <div className="slide d-flex align-items-stretch flex-column p-2">
                <div className="period">30 Jan — 06 Feb</div>
                <div className="bottom d-flex justify-content-center align-items-center flex-column">
                  <div className="token-price"><span className="label">Token price:</span><br /><span className="value">$0.01</span></div>
                  <div className="bonus mt-2"><span className="label">Bonus:</span><br /><span className="value">2%</span></div>
                </div>
              </div>
            </div>
            <div className="slide-wrapper">
              <div className="slide d-flex align-items-stretch flex-column p-2">
                <div className="period">06 Feb — 13 Feb</div>
                <div className="bottom d-flex justify-content-center align-items-center flex-column">
                  <div className="token-price"><span className="label">Token price:</span><br /><span className="value">$0.015</span></div>
                  <div className="bonus mt-2"><span className="label">Bonus:</span><br /><span className="value">0%</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className={classNames('slider-item-wrapper text-center d-flex justify-content-center')}>
            <div className="slide-wrapper">
              <div className="slide d-flex align-items-stretch flex-column p-2">
                <div className="period">06 Feb — 13 Feb</div>
                <div className="bottom d-flex justify-content-center align-items-center flex-column">
                  <div className="token-price"><span className="label">Token price:</span><br /><span className="value">$0.015</span></div>
                  <div className="bonus mt-2"><span className="label">Bonus:</span><br /><span className="value">0%</span></div>
                </div>
              </div>
            </div>
            <div className="slide-wrapper">
              <div className="slide d-flex justify-content-center align-items-center p-2 last">
                <img src={require('./img/truck-white.svg')} alt="Truck" />
              </div>
            </div>
          </div> */}
        </SliderSlick>
      </div>
    );
  }
}

export default withTranslate(Slider);
