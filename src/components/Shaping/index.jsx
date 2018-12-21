/* eslint-disable max-len */

import React, {Component} from 'react';
import {withTranslate} from 'react-redux-multilingual';

import Slider from 'components/Stores/Slider';

import './styles.sass';

class Shaping extends Component {
  render() {
    const {translate} = this.props;

    return (
      <section className="section-shaping">
        <div className="container">
          <h1 className="h1 text-center mb-5">{translate('shaping_title')}</h1>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="text-center mb-4">
                <img className="icon" src={require('./img/shape-1.svg')} alt="World" />
              </div>
              <div className="text text-center">{translate('shaping_text_1')}</div>
            </div>
            <div className="col-12 col-md-4">
              <div className="text-center mb-4">
                <img className="icon" src={require('./img/shape-2.svg')} alt="Benefit" />
              </div>
              <div className="text text-center">{translate('shaping_text_2')}</div>
            </div>
            <div className="col-12 col-md-4">
              <div className="text-center mb-4">
                <img className="icon" src={require('./img/shape-3.svg')} alt="Growth" />
              </div>
              <div className="text text-center">{translate('shaping_text_3')}</div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-12 pl-md-5 pr-md-5">
              <img className="image" src={require(`./img/${translate('demand')}.png`)} alt="Demand" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslate(Shaping);
