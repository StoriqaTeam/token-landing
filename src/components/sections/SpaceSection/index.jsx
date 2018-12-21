/* eslint-disable max-len */

import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';

import Stream from 'components/Stream';
import CountdownBlock from 'components/CountdownBlock';
import Documents from 'components/Documents';
import Language from 'components/Language';

class SpaceSection extends Component {

  constructor(props) {
    super(props);
    // I know, it's so ugly :-(
    this.state = {
      showPopupFor: null,
      top: 0,
      left: 0
    };
    this.mouseMove = this.mouseMove.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.mouseMove);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseMove);
  }

  mouseMove(e) {
    const {img} = this.refs;

    if (!img) return;

    const imgDOM = findDOMNode(img);
    const box = imgDOM.getBoundingClientRect();
    const left = box.left + pageXOffset; // координата элемента левый верхний X
    const top = box.top + pageYOffset; // координата элемента левый верхний Y
    const centerX = left + imgDOM.offsetWidth / 2;
    const centerY = top + imgDOM.offsetHeight / 2;
    const {pageX, pageY} = e;

    const diff = pageY - centerY;

    const topDistance = diff >= 0 ? -Math.sqrt(diff) : Math.sqrt(-diff);

    this.setState({
      // top: `${(-(pageY / centerY) * 200) + 200}px`,
      top: `${topDistance}px`,
      left: `${(-(pageX / centerX) * 40) + 40}px`
    });
  }

  render() {
    const {top, left} = this.state;

    return (
      <section className={classNames('space-section')}>
        <img
          ref="img"
          className=""
          src={require('./img/space.png')}
          alt=""
          style={{
            transform: `translate(${left},${top})`
          }}
        />
      </section>
    );
  }
}

export default SpaceSection;
