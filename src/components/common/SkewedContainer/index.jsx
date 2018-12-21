import React from 'react';
import classNames from 'classnames';

import './styles.sass';

const SkewedContainer = ({
    classname,
    topShift = 120,
    bottomShift = 120,
    skewTop = false,
    skewTopReverse = false,
    skewBottom = true,
    skewBottomReverse = false,
    children,
  }) => (
  <div
    className={classNames('skewed-container', classname, {
      'skewed-container--top-bottom': skewTop && skewBottom,
      'skewed-container--bottom': !skewTop && !skewTopReverse && skewBottom,
    })}
    style={{marginTop: (skewTop || skewTopReverse) ? -1*topShift : 0}}
  >
    {children}
  </div>
);

export default SkewedContainer;
