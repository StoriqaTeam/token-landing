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
          <h1 className="h1 text-center mb-5">Some title</h1>
          <p className="text-center">Storiqa will be holding a global event that aims to address the newest developments at the meeting point of e-commerce and the blockchain – the two forward-thinking fields of the present day.</p>
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="text-center mb-4">
                <img className="icon" src={require('./img/shape-1.svg')} alt="World" />
              </div>
              <div className="text text-center">Classification of the stumbling blocks in online shopping encountered by sellers and buyers alike, and viable solutions based on the blockchain;</div>
            </div>
            <div className="col-12 col-md-4">
              <div className="text-center mb-4">
                <img className="icon" src={require('./img/shape-2.svg')} alt="Benefit" />
              </div>
              <div className="text text-center">Considerations on possible use of cryptocurrency and its function in the business field;</div>
            </div>
            <div className="col-12 col-md-4">
              <div className="text-center mb-4">
                <img className="icon" src={require('./img/shape-3.svg')} alt="Growth" />
              </div>
              <div className="text text-center">Analysis of the current trends in e-commerce that seek to are able to benefit from implementing the blockchain.</div>
            </div>
          </div>
          <p className="text-center">An international event on the use of blockchain in e-commerce is coming – and we want you to benefit from this opportunity!</p>
        </div>
      </section>
    );
  }
}

export default withTranslate(Shaping);
