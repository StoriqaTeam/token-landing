/* eslint-disable max-len */

import React, {Component} from 'react';
import SliderSlick from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './styles.sass';

const DATA = [
  {id: 1, link: 'https://www.forbes.com/search/?q=storiqa#60bb63b279f4', image: require('./img/forbes.png')},
  {id: 2, link: 'https://www.investing.com/studios/article-1236', image: require('./img/investing.png')},
  {id: 3, link: 'https://cointelegraph.com/search?query=storiqa', image: require('./img/cointelegraph.png')},
  {id: 4, link: 'https://nulltx.com/storiqa-announces-the-launch-of-a-marketplace-test-with-focus-on-apac/', image: require('./img/nulltx.png')},
  {id: 5, link: 'https://www.nasdaq.com/article/20-cryptocurrencies-to-bet-the-house-on-cm970332', image: require('./img/nasdaq.png')},
  {id: 6, link: 'https://cryptovest.com/news/storiqa-a-global-crypto-marketplace-is-changing-the-game/', image: require('./img/cryptovest.png')},
  {id: 7, link: 'https://hype.codes/storiqa-roll-out-platform-all-users', image: require('./img/hypecodes.png')},
  {id: 8, link: 'https://finance.yahoo.com/news/cryptoshopping-storiqa-pay-goods-cryptos-062556235.html?guccounter=1', image: require('./img/yahoo.png')},
  {id: 9, link: 'https://www.cryptoninjas.net/2018/11/04/storiqa-announces-the-launch-of-crypto-marketplace-test-with-focus-on-apac/', image: require('./img/cryptoninja.png')},
  {id: 10, link: 'https://retailtechinnovationhub.com/startup-stories/2018/4/20/qa-andrian-galkin-coo-and-co-founder-storiqa', image: require('./img/rtih.png')},
  {id: 11, link: 'https://www.globalbankingandfinance.com/blockchain-startups-join-forces-to-disrupt-global-ecommerce/', image: require('./img/FGB.png')},
  {id: 12, link: 'https://www.coinspeaker.com/2017/10/02/real-businesses-take-off-cryptospace-kickico-welcomes-board-3-large-ico-campaigns/', image: require('./img/coin_speaker.png')},
  {id: 13, link: 'https://www.disruptordaily.com/disruption-blockchain-part-79-ruslan-tugushev-storiqa/', image: require('./img/disruptor.png')},
  {id: 14, link: 'http://www.paymenteye.com/2018/03/29/the-blockchain-revolution-in-ecommerce/', image: require('./img/paymenteye.png')},
  {id: 15, link: 'https://www.cryptocoinsnews.com/?s=Storiqa&category_name=&submit=Search', image: require('./img/cryptocoins.png')},
  {id: 16, link: 'https://bitsonline.com/nuggets-storgia-disrupt-ecommerce/', image: require('./img/BITSONLN.png')},
  {id: 17, link: 'https://bitcoinexchangeguide.com/nuggets-and-storiqa-announce-e-commerce-blockchain-partnership/', image: require('./img/BTCXCH.png')},
  {id: 18, link: 'https://coinidol.com/creating-online-trading-platform-with-ico-fundraising/', image: require('./img/coin_idol.png')},
  {id: 19, link: 'https://btcmanager.com/storiqa-brings-e-commerce-blockchain/', image: require('./img/btc_manager.png')},
  {id: 20, link: 'https://www.toutiao.com/i6493358406529712654/', image: require('./img/china_post.png')},
  {id: 21, link: 'http://www.the-blockchain.com/2017/11/17/storiqa-makes-cryptocurrency-closer-world-usual-e-shop-peculiarities-unusual-currency/', image: require('./img/blockchain_news.png')},
  {id: 22, link: 'http://bitcoinist.com/?s=storiqa', image: require('./img/bitcoinist.png')},
  {id: 23, link: 'http://www.getnews.co.kr/news/articleView.html?idxno=72093', image: require('./img/getnews.png')},
  {id: 24, link: 'https://bitnovosti.com/?s=storiqa&x=0&y=0', image: require('./img/bitnovosti.png')},
  {id: 25, link: 'https://news.bitcoin.com/pr-storiqa-is-starting-to-expand-new-trend-in-e-commerce-worldwide/', image: require('./img/news_b.png')},
  {id: 26, link: 'https://www.crypto-economy.net/en/crypto-marketplace-storiqa-rolls-out-the-platform-for-all-users/', image: require('./img/ce.png')},
  {id: 27, link: 'https://www.chipin.com/crypto-marketplace-storiqa-rolls-platform/', image: require('./img/chipin.png')},
  {id: 28, link: 'https://coincodex.com/article/2414/crypto-marketplace-storiqa-rolls-out-platform-for-all-users/', image: require('./img/coincodex.png')},
  {id: 29, link: 'https://www.coinpro.ch/storiqa-will-mit-einem-kryptobasierten-marktplatz-starten/', image: require('./img/coinpro.png')},
];

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
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [{
    breakpoint: 576,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 1400,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 1700,
    settings: {
      slidesToShow: 5
    }
  }]
};

class Slider extends Component {
  render() {
    const {deposit} = this.props;

    return (
      <div className="slider-rate">
        <SliderSlick {...settings}>
          {DATA.map(item => {
            return <div key={item.id} className="slider-item d-flex align-items-center justify-content-center">
              <a href={item.link} target="_blank">
                <img className="img d-inline-block d-md-block" src={item.image} />
              </a>
            </div>;
          })}
        </SliderSlick>
      </div>
    );
  }
}

export default Slider;
