/* eslint-disable max-len */

import React, {Component} from 'react';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';

import {Title, AngleContainer} from 'components/common';

class MarketSection extends Component {
  render() {
    const {translate} = this.props;

    return (
      <AngleContainer className="inwork-section">
        <div className="container text-center text-white">
          <Title text={translate('market.title')} />
          In work
        </div>
      </AngleContainer>
    );
  }
}

export default withTranslate(MarketSection);
