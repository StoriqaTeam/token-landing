/* eslint-disable max-len */

import React from 'react';
import classNames from 'classnames';

import './styles.sass';

const Spiner = ({small, white}) => (
  <div className={classNames('spiner', {small, white})} />
);

export default Spiner;
