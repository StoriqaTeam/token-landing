import React from 'react';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';

import Social from 'components/Social';
import Preorder from 'components/Preorder';
import Countdown from 'components/Countdown';

import 'font-awesome/css/font-awesome.css';
import './styles.sass';

const year = (new Date()).getFullYear();

const Footer = ({translate, className}) => (
  <footer className={classNames('footer footer-event', 'text-center', className)}>
    <div className="container">
      {/* <div className="social pt-2 pb-2 mb-5">
        <Social className="justify-content-around" />
      </div> */}
      <div className="copyright pl-2 pr-2">
        <p className="d-block text-white">{translate('all_rights_reserved', {year})}</p>
        <p className="d-block text-white">{translate('on_that_website')}</p>
      </div>
    </div>
  </footer>
);

export default withTranslate(Footer);
