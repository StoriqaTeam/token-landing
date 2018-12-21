/* eslint-disable max-len */

import React from 'react';
import classNames from 'classnames';

import './styles.sass';

const ButtonEmpty = ({children, href, className, wrapperClassName, mini, filled, onClick}) => (
  <div className={`button-empty ${wrapperClassName || ''}`}>
    {!href &&
      <button
        className={classNames('text-white text-center open-sans-semibold', className, {
          mini,
          filled,
        })}
        onClick={onClick}
      >
        {children}
      </button>
    }
    {href &&
    <a
      href={href} target="_blank" className={classNames('button-empty text-white text-center open-sans-semibold', className, {mini, filled})}
      onClick={onClick}
    >
      {children}
    </a>
    }
  </div>
);

export default ButtonEmpty;
