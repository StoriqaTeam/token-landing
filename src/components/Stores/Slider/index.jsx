import React from 'react';
import {withTranslate} from 'react-redux-multilingual';
import SliderSlick from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './styles.sass';

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

const Slider = ({translate}) => {
  const items = [
    'neovima',
    'bearbike',
    'cocco_bello_honey',
    'maria_sofronova_ceramics',
    'snegi',
    'varvar',
    'voicebook',
    'slatwicki',
    'taiga',
    'twinswood',
    'elki',
    'makosh',
    'foxwood',
    'andreev',
    'happiness',
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="slider">
      <SliderSlick {...settings}>
        {items.map((item, i) => (
          <div key={i} className="slider-item">
            <div className="slider-img"><img src={require('./img/' + item + '.jpg')} /></div>
            <p className="legend">
              {translate('slider.' + item)}
            </p>
          </div>
        ))}
      </SliderSlick>
    </div>
  );
};

export default withTranslate(Slider);
