import React from 'react';
import classNames from 'classnames';

import Angle from 'components/Angle';

import './styles.sass';

const AngleContainer = ({children, className, hiddenBottom, hiddenTop, id}) => (
  <section className={classNames('angle-container', className)} id={id || ''}>
    {!hiddenTop && <Angle flip />}
      <div className="angle-section">
        {children}
      </div>
    {!hiddenBottom && <Angle />}
  </section>
);

export default AngleContainer;

