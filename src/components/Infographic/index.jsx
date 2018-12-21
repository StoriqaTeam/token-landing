/* eslint-disable max-len */

import React, {Component} from 'react';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';

import Slider from 'components/Stores/Slider';

import './styles.sass';

class Infographic extends Component {
  render() {
    const {
      translate,
      title,
      src,
      alt,
      text,
      size
    } = this.props;

    return (
      <section className="section-infographic">
        <div className="container text-center">
          {title && <h2 className="h2 mb-5"><b>{title}</b></h2>}
          {text && <p className="mb-5">{text}</p>}
          <div className="container">
            <div className="row">
              <div className={classNames({
                'col-12': true,
                'col-12 col-lg-9': size === 'medium',
                'col-12 col-lg-7': size === 'small'
              })}>
                <img src={src} alt={alt} className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslate(Infographic);
