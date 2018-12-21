import React from 'react';
import classNames from 'classnames';

import './styles.sass';

const Title = ({text, black, subtext, whiteline}) => (
  <div className={classNames('section-title text-white text-center open-sans-bold', {black, whiteline})}>
    <div className="text">{text}</div>
    {subtext && <div className="subtext open-sans pb-2">{subtext}</div>}
  </div>
);

export default Title;
