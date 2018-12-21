import React from 'react';
import classNames from 'classnames';

import './styles.sass';

const Angle = ({flip, dark}) => (
  <div className={classNames('angle', {flip, dark})}>
    {!dark && <img src={require('./img/angle.png')} />}
    {dark && <img src={require('./img/angle-dark.png')} />}
  </div>
);

export default Angle;
