/* eslint-disable max-len */
import React from 'react';

import Article from './Article';
import Button from './Button';

const DATA = [
  {link: 'https://cointelegraph.com/search?query=storiqa', image: require('./img/cointelegraph.png')},
  {link: 'https://www.huffingtonpost.com/entry/changes-in-ecommerce-with-blockchain-implementation_us_5a28e80de4b09ee35b8ae66b', image: require('./img/huff.png')},
  {link: 'https://www.toutiao.com/i6493358406529712654/', image: require('./img/china_post.png')},
  {link: 'http://www.newsbtc.com/2017/11/24/blockchain-powered-marketplace-storiqa/', image: require('./img/news_btc.png')},
  {link: 'https://www.coinspeaker.com/2017/10/02/real-businesses-take-off-cryptospace-kickico-welcomes-board-3-large-ico-campaigns/', image: require('./img/coin_speaker.png')},
  {link: 'https://www.cryptocoinsnews.com/?s=Storiqa&category_name=&submit=Search', image: require('./img/cryptocoins.png')},
  {link: 'http://irishtechnews.ie/business-showcase-storiqa/', image: require('./img/itn.png')},
  {link: 'https://coinidol.com/creating-online-trading-platform-with-ico-fundraising/', image: require('./img/coin_idol.png')},
  {link: 'https://btcmanager.com/storiqa-brings-e-commerce-blockchain/', image: require('./img/btc_manager.png')},
  {link: 'http://www.the-blockchain.com/2017/11/17/storiqa-makes-cryptocurrency-closer-world-usual-e-shop-peculiarities-unusual-currency/', image: require('./img/blockchain_news.png')},
  {link: 'http://bitcoinist.com/growing-local-business-online-through-storiqa-and-blockchain-technology/', image: require('./img/bitcoinist.png')},
  {link: 'https://bitnovosti.com/?s=storiqa&x=0&y=0', image: require('./img/bitnovosti.png')},
  {link: 'https://news.bitcoin.com/pr-storiqa-is-starting-to-expand-new-trend-in-e-commerce-worldwide/', image: require('./img/news_b.png')},
];

const SIZE = DATA.length;
const POSITION_THRESHOLD = 20;

class Scroller extends React.Component {

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.elements = [];
    this.container = null;
  }

  setRef(idx, ref) {
    this.elements[idx] = ref;
  }

  setContainerRef(ref) {
    this.container = ref;
  }

  getLeftmostVisible() {
    const container = this.container;
    if (!container) return;
    let scrollToElem;
    let i = 0;
    while (i < this.elements.length) {
      const elem = this.elements[i];
      const left = elem.getBoundingClientRect().left;
      if (left > POSITION_THRESHOLD) {
        return Math.max(i - 1, 0);
      }
      i++;
    }
    return i;
  }

  handleScroll(isLeft) {
    const container = this.container;
    if (!container) return;
    const leftmost = this.getLeftmostVisible();
    let scrollToNum = isLeft ? leftmost - 1 : leftmost + 1;
    const element = this.elements[scrollToNum];
    if (!element) return;
    const left = element.offsetLeft;
    container.scrollTo({
      top: 0,
      left,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <div className="media-section-scroller">
        <Button left onClick={this.handleScroll} />
        <Button right onClick={this.handleScroll} />
        <div
          className="container media-section-scroller-container"
          id="media_section_scroll_container"
          ref={(ref) => this.setContainerRef(ref)}
        >
          {DATA.map((data, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex align-items-center justify-content-center" key={index} ref={(ref) => this.setRef(index, ref)}>
              <Article link={data.link} image={data.image} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Scroller;
