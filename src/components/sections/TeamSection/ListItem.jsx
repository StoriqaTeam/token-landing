/* eslint-disable max-len */

import React from 'react';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';

const ListItem = ({photo, name, sn, translate, mockNumber = 0}) => (
  <div className={classNames('col-12 col-md-6 col-lg-4 team-section--members--item mb-5', {[`mock-${mockNumber}`]: !photo && mockNumber > 0})}>
    {photo && (
      <div className="team-section--members--item--photo">
        <img src={require('./img/'+photo)} alt={name} />
        {(sn && sn.in && sn.in.length > 0) && (
          <a href={sn.in} target="_blank" className="first-of-two">
            <img src={require('./img/member-linkedin.svg')} alt="Linkedin" />
          </a>
        )}
        {(sn && sn.fb && sn.fb.length > 0) && (
          <a href={sn.fb} target="_blank" className="first-of-two">
            <img src={require('./img/member-facebook.svg')} alt="Linkedin" />
          </a>
        )}
      </div>
    )}
    {translate(`team.members`)[name] && translate(`team.members`)[name].name && (
      <div className="team-section--members--item--name">
        {translate(`team.members`)[name].name}
      </div>
    )}
    {translate(`team.members`)[name] && translate(`team.members`)[name].position && (
      <div className="team-section--members--item--position">
        {translate(`team.members`)[name].position}
      </div>
    )}
    {translate(`team.members`)[name] && translate(`team.members`)[name].desc && (
      <div className="team-section--members--item--description text-left">
        {translate(`team.members`)[name].desc}
      </div>
    )}
  </div>
);

export default withTranslate(ListItem);
