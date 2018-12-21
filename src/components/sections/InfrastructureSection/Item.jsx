/* eslint-disable max-len */

import React from 'react';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';

const ListItem = ({data1, data2, hanger, className}) => (
  <div className={classNames('small-block', className)}>
    {hanger && <div className="hanger">MVP</div>}
    <div className="item-block d-flex flex-row align-items-start">
      <div className="left">{data1.leftText}</div>
      <div className={classNames('right', data1.color)}>{data1.status}</div>
    </div>
    {data2 && <div className="item-block d-flex flex-row align-items-start">
      <div className="left">{data2.leftText}</div>
      <div className={classNames('right', data2.color)}>{data2.status}</div>
    </div>}
  </div>
);

export default ListItem;
