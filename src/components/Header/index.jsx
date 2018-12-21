import React from 'react';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';

import Language from 'components/Language';
import Social from 'components/Social';

const Header = ({translate, className}) => (
  <nav className={classNames('header', 'container-fluid', className)}>
    <div className="container">
      <div className="row pt-4 pb-4">
        <div className="d-flex align-items-center justify-content-center
                        justify-content-md-start col-md-4">
          <a href="/">&larr; {translate('navigation.to_main')}</a>
        </div>
        <div className="d-block col-md-4 text-center text-md-center pt-4 pb-4">
          <figure className="logo-storiqa">
            <img src={require('img/logo-storiqa.svg')} alt="Storiqa Logo" />
          </figure>
        </div>
        <div className="d-flex align-items-center justify-content-center
                        justify-content-md-end col-md-4 pb-1">
          <div className="d-block text-center text-md-right">
            <div className="socials-block d-inline-block">
              <Social className="justify-content-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default withTranslate(Header);
