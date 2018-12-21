/* eslint-disable max-len */

import React from 'react';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';

import {Title, SkewedContainer} from 'components/common';

const RoadmapSection = ({translate}) => {
  return (
    <section className="roadmap-section text-white" id="roadmap">
      <div className="container-fluid">
        <Title text={translate('roadmap.title')} />
        <div className="row example-split d-flex justify-content-center">
          <div className="split-wrapper">
            <ul className="timeline-new timeline-split">
              <li className="timeline-item period period-start">
                <div className="timeline-info open-sans-semibold"></div>
                <div className="timeline-marker">
                  <div className="before"></div>
                  <div className="after"></div>
                </div>
                <div className="timeline-content">
                  <p className="timeline-title open-sans-bold flag">2016</p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                  <span>{translate('roadmap.section_1.phase')}</span>
                </div>
                <div className="timeline-marker">
                  <div className="before"></div>
                  <div className="after"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-title open-sans-semibold">{translate('roadmap.section_1.title')}</div>
                  <ul>
                    {translate('roadmap.section_1.list').map((it, i) => {
                      return <li key={i}>{it}</li>;
                    })}
                  </ul>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                  <span>{translate('roadmap.section_2.phase')}</span>
                </div>
                <div className="timeline-marker">
                  <div className="before"></div>
                  <div className="after"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-title open-sans-semibold">{translate('roadmap.section_2.title')}</div>
                  <ul>
                    {translate('roadmap.section_2.list').map((it, i) => {
                      return <li key={i}>{it}</li>;
                    })}
                  </ul>
                </div>
              </li>
              <li className="timeline-item period">
                <div className="timeline-info"></div>
                <div className="timeline-marker">
                  <div className="before"></div>
                  <div className="after"></div>
                </div>
                <div className="timeline-content">
                  <p className="timeline-title open-sans-bold flag">2017</p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                  <span>{translate('roadmap.section_3.phase')}</span>
                </div>
                <div className="timeline-marker">
                  <div className="before"></div>
                  <div className="after"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-title open-sans-semibold">{translate('roadmap.section_3.title')}</div>
                  <ul>
                    {translate('roadmap.section_3.list').map((it, i) => {
                      return <li key={i}>{it}</li>;
                    })}
                  </ul>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                  <span>{translate('roadmap.section_4.phase')}</span>
                </div>
                <div className="timeline-marker">
                  <div className="before"></div>
                  <div className="after"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-title open-sans-semibold">{translate('roadmap.section_4.title')}</div>
                  <ul>
                    {translate('roadmap.section_4.list').map((it, i) => {
                      return <li key={i}>{it}</li>;
                    })}
                  </ul>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                  <span>{translate('roadmap.section_5.phase')}</span>
                </div>
                <div className="timeline-marker">
                  <div className="before"></div>
                  <div className="after"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-title open-sans-semibold">{translate('roadmap.section_5.title')}</div>
                  <ul>
                    {translate('roadmap.section_5.list').map((it, i) => {
                      return <li key={i}>{it}</li>;
                    })}
                  </ul>
                </div>
              </li>
              <li className="timeline-item period">
                <div className="timeline-info"></div>
                <div className="timeline-marker">
                  <div className="before"></div>
                  <div className="after"></div>
                </div>
                <div className="timeline-content">
                  <p className="timeline-title open-sans-bold flag">2018</p>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                  <span>{translate('roadmap.section_6.phase')}</span>
                </div>
                <div className="timeline-marker">
                  <div className="before"></div>
                  <div className="after"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-title open-sans-semibold">{translate('roadmap.section_6.title')}</div>
                  <ul>
                    {translate('roadmap.section_6.list').map((it, i) => {
                      return <li key={i}>{it}</li>;
                    })}
                  </ul>
                </div>
              </li>
              <li className="timeline-item">
                <div className="timeline-info">
                  <span>{translate('roadmap.section_7.phase')}</span>
                </div>
                <div className="timeline-marker">
                  <div className="before"></div>
                  <div className="after"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-title"><b>{translate('roadmap.section_7.title')}</b></div>
                  <ul>
                    {translate('roadmap.section_7.list').map((it, i) => {
                      return <li key={i}>{it}</li>;
                    })}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslate(RoadmapSection);
