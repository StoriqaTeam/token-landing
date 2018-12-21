/* eslint-disable max-len */

import React from 'react';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';

import {Title, SkewedContainer} from 'components/common';

import items from './items.json';

const RoadmapSection = ({translate}) => {
  return (
    <section className="new-roadmap-section text-white" id="roadmap">
      <div className="container">
        <Title text={translate('roadmap.title')} />
        <div className="roadmap-wrapper">
          {items.map((item, i) => (
            <div key={i} className={classNames('roadmap__item', {[item.status]: item.status})}>
              <div className="roadmap__date">
                {item.year}<span className="roadmap__date__small">{item.quarter}</span>
              </div>
              <div className="roadmap__info">
                {item.info}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default withTranslate(RoadmapSection);
