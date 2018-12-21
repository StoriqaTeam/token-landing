/* eslint-disable max-len */

import React from 'react';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';

import {Title} from 'components/common';

const PartnersSection = ({translate}) => (
  <section className="partners-section">
    <div className="container">
      <Title text={translate('partners.title')} black />
      <div className="row d-flex justify-content-center">
        {/* <div className="item d-flex align-items-center justify-content-center col-12 col-md-6 col-lg-4 text-right mb-4">
          <a href="http://www.dhl.com" target="_blank">
            <img src={require('./img/dhl-logo2.png')} alt="DHL" className="" />
          </a>
        </div> */}
        {/* <div className="item d-flex align-items-center justify-content-center col-12 col-md-6 col-lg-4 text-right mb-4">
          <a href="https://www.ups.com" target="_blank">
            <img src={require('./img/ups-logo.png')} alt="UPS" className="" />
          </a>
        </div> */}
        {/* <div className="item d-flex align-items-center justify-content-center col-12 col-md-6 col-lg-4 text-left mb-4">
          <a href="https://www.tnt.com" target="_blank">
            <img src={require('./img/tnt-logo.png')} alt="TNT" className="" />
          </a>
        </div> */}
        <div className="item d-flex align-items-center justify-content-center col-12 col-md-6 col-lg-4 text-left mb-4">
          <a href="https://indodax.com/" target="_blank">
            <img src={require('./img/indodax-logo.png')} alt="Indodax" className="" />
          </a>
        </div>
        <div className="item d-flex align-items-center justify-content-center col-12 col-md-6 col-lg-4 text-left mb-4">
          <a href="https://hitbtc.com/" target="_blank">
            <img src={require('./img/hitbtc-logo.png')} alt="HitBTC" className="" />
          </a>
        </div>
        <div className="item d-flex align-items-center justify-content-center col-12 col-md-6 col-lg-4 text-left mb-4">
          <a href="https://exmo.me" target="_blank">
            <img src={require('./img/exmo-logo.png')} alt="Exmo" className="" />
          </a>
        </div>
        <div className="item d-flex align-items-center justify-content-center col-12 col-md-6 col-lg-4 text-left mb-4">
          <a href="https://www.hotbit.io" target="_blank">
            <img src={require('./img/hotbit-logo.png')} alt="Hotbit" className="" />
          </a>
        </div>
        <div className="item d-flex align-items-center justify-content-center col-12 col-md-6 col-lg-4 text-left mb-4">
          <a href="https://www.originprotocol.com" target="_blank">
            <img src={require('./img/origin-logo.png')} alt="Origin Protocol" className="" />
          </a>
        </div>
        <div className="item d-flex align-items-center justify-content-center col-12 col-md-6 col-lg-4 text-left mb-4">
          <a href="https://mixbytes.io" target="_blank">
            <img src={require('./img/mixbytes-logo.png')} alt="Mixbytes" className="" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default withTranslate(PartnersSection);

