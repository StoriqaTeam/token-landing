/* eslint-disable max-len */

import React, {Component} from 'react';
import {withTranslate} from 'react-redux-multilingual';

import Slider from 'components/Stores/Slider';

import './styles.sass';

class Stores extends Component {
  render() {
    const {translate} = this.props;

    return (
      <section className="section-stores">
        <div className="container">
          <h1 className="h1 text-center mb-5">{translate('first_stores')}</h1>
          <div className="row">
            <div className="col-12">
              <Slider />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslate(Stores);
