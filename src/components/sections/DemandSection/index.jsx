import React from 'react';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';
import MediaQuery from 'react-responsive';

import {Title, DarkenedBlock, SkewedContainer} from 'components/common';

import TokenPriceChart from './TokenPriceChart';

const DemandSection = ({translate, ICOMainInfo}) => (
  <section className="demand-section" id="token">
    <div className="container">
      <Title text={translate('demand_section.title')} />
      <div className="row d-flex justify-content-center">
        <div className="col-12 text-center">
          <MediaQuery maxWidth={575}>
            <img src={require(`./img/${translate('demand_section.img_576')}.png`)} alt="Demand" className="" />
          </MediaQuery>
          <MediaQuery minWidth={576} maxWidth={767}>
            <img src={require(`./img/${translate('demand_section.img_768')}.png`)} alt="Demand" className="" />
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <img src={require(`./img/${translate('demand_section.img_992')}.png`)} alt="Demand" className="" />
          </MediaQuery>
        </div>
        <div className="col-12">
          <TokenPriceChart ICOMainInfo={ICOMainInfo} />
        </div>
      </div>
    </div>
  </section>
);

export default withTranslate(DemandSection);
