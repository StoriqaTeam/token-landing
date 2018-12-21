/* eslint-disable max-len */

import React, {Component} from 'react';
import {withTranslate} from 'react-redux-multilingual';
import SliderSlick from 'react-slick';

import {totalETHOld} from 'helpers/oldCurrencyData';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './styles.sass';

const currencies = ['BTC', 'ETH', 'LTC', 'USDT', 'DASH', 'NEO', 'BCH', 'BCC', 'QTUM', 'STRAT', 'DOGE', 'ZEC', 'WAVES', 'LSK', 'SYS', 'EXP', 'MAID', 'DGB', 'PPC'];

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
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [{
    breakpoint: 767,
    settings: {
      vertical: true
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      vertical: false
    }
  }, {
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      vertical: false
    }
  }],
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  // vertical: true,
  // verticalSwiping: true,
};

class Slider extends Component {
  render() {
    const {deposit} = this.props;

    return (
      <div className="slider-rate">
        <SliderSlick {...settings}>
          {currencies.map(item => {
            let value = deposit[item] ? (item === 'ETH' ? (Number(deposit[item]) + totalETHOld) : Number(deposit[item])).toFixed(2) : '0.00';

            // value = value.replace('.', ',');

            return <div key={item} className="slider-item d-inline-block text-center">
              <img className="icon mb-2 d-inline-block d-md-block" src={require(`./icons/${item}.png`)} alt="World" />
              <span className="abb ml-2">{item}:</span>
              <span className="value ml-1">{value}</span>
            </div>;
          })}
        </SliderSlick>
      </div>
    );
  }
}

export default withTranslate(Slider);
