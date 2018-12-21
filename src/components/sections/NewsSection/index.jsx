/* eslint-disable max-len */

import React, {Component} from 'react';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';
import MediaQuery from 'react-responsive';
import SliderSlick from 'react-slick';
import axios from 'axios';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {Title, AngleContainer} from 'components/common';

const SampleNextArrow = (props) => {
  return (
    <div
      className="arrow next-arrow"
      onClick={props.onClick} />
  );
};

const SamplePrevArrow = (props) => {
  return (
    <div
      className="arrow prev-arrow"
      onClick={props.onClick} />
  );
};

class NewsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      settings: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 1
          }
        }],
        arrows: false
      }
    };
  }

  componentWillMount() {
    axios.get('https://dl.dropboxusercontent.com/s/r4e8necqj7mgz83/news.json?dl=0')
      .then(({data}) => {
        this.setState({
          news: data,
          settings: {...this.state.settings, arrows: data.length > 2 || (data.length > 1 && document.documentElement.clientWidth < 991)}
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {news, settings} = this.state;

    return (
      <section className="news-section text-white" id="news">
        <div className="container">
          <Title text="Latest news" />
          <div className="news-slider">
            {news && news.length > 0 && <SliderSlick {...settings}>
              {news.map((newsBlockItem, newsBlockItemIdx) => {
                return (
                  <div key={newsBlockItemIdx} className="item">
                    {newsBlockItem && newsBlockItem.length > 0 && newsBlockItem.map((newsItem, newsItemIdx) => {
                      return (
                        <div
                          key={newsItemIdx}
                          className="item-wrap"
                        >
                          <a
                            href={newsItem.link}
                            className="row link"
                            target="_blank"
                          >
                            <div className="col-12 col-md-6 left text-center text-md-left">
                              <img src={newsItem.img} />
                            </div>
                            <div className="col-12 col-md-6 right mt-4 mt-md-0">
                              <div className="title text-center text-md-left">{newsItem.title}</div>
                              <div className="text text-center text-md-left">{newsItem.text}</div>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </SliderSlick>}
          </div>
          <div className="icons row">
            <a
              href="https://www.reddit.com/r/Storiqa/"
              className="col-12 col-sm-6 col-lg-3 icons-item text-white"
              target="_blank"
            >
              <div className="icon text-center">
                <img src={require('./img/reddit-logo.svg')} />
              </div>
              <div className="text text-center">Interested in Storiqa tech news?</div>
            </a>
            <a
              href="https://twitter.com/storiqa"
              className="col-12 col-sm-6 col-lg-3 icons-item text-white"
              target="_blank"
            >
              <div className="icon text-center">
                <img src={require('./img/twitter-logo.svg')} />
              </div>
              <div className="text text-center">Wanna be the first to know?</div>
            </a>
            <a
              href="https://medium.com/storiqa"
              className="col-12 col-sm-6 col-lg-3 icons-item text-white"
              target="_blank"
            >
              <div className="icon text-center">
                <img src={require('./img/medium-logo.svg')} />
              </div>
              <div className="text text-center">Like to read?</div>
            </a>
            <a
              href="https://t.me/storiqa_en"
              className="col-12 col-sm-6 col-lg-3 icons-item text-white"
              target="_blank"
            >
              <div className="icon text-center">
                <img src={require('./img/telegram-logo.svg')} />
              </div>
              <div className="text text-center">Wanna chat and ask?</div>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslate(NewsSection);
