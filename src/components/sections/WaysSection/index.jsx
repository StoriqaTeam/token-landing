/* eslint-disable max-len */

import React, {Component} from 'react';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';
import MediaQuery from 'react-responsive';

import {Title} from 'components/common';

const WaysSection = ({translate, stage}) => (
  <section className="ways-section text-white">
    <div className="container">
      <div className="bg" />
      <Title text={translate('way.title')} />
      <div className="text-center label open-sans-semibold">{stage ? translate('way.price') : ''}</div>
      {stage && <div className="text-center price open-sans-bold">${stage.coin_price}</div>}
      <div className="text-center img mt-4">
        <MediaQuery maxWidth={575}>
          <img src={require(`./img/${translate('way.img_576')}.png`)} alt="Way" className="" />
        </MediaQuery>
        <MediaQuery minWidth={576}>
          <img src={require(`./img/${translate('way.img_768')}.png`)} alt="Way" className="" />
        </MediaQuery>
      </div>
    </div>
  </section>
);

export default withTranslate(WaysSection);
