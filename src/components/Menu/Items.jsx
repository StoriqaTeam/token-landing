import React from 'react';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';
import {Link as ScrollLink} from 'react-scroll';
import {withdrawURL} from 'helpers/constants';

import Documents from 'components/Documents';

const Link = ({children, to}) => (
  <ScrollLink to={to} activeClass="active" smooth={true} spy={true} offset={-80} duration={1000} isDynamic={true}>
    {children}
  </ScrollLink>
);

const Items = ({translate, onClick, handlePopup}) => (
  <div className="d-flex align-items-center flex-lg-row flex-column" onClick={onClick}>
    <div className="item text-right hidden-md-up try-button">
      <a href="https://beta.storiqa.com/" className="try-demo-button text-white" target="_blank">Try Marketplace</a>
    </div>
    <div className="item text-right">
      <Documents />
    </div>
    <div className="item text-right">
      <Link to="about">About</Link>
    </div>
    <div className="item text-right">
      <Link to="news" className="">News</Link>
    </div>
    <div className="item text-right">
      <Link to="roadmap">Roadmap</Link>
    </div>
    <div className="item text-right">
      <Link to="team">Team</Link>
    </div>
    <div className="item text-right">
      <Link to="contact_us">Contact us</Link>
    </div>
    <div className="item text-right">
      <a href="http://help.storiqa.com" className="faq-link" target="_blank">{translate('menu.faq')}</a>
    </div>
  </div>
);

export default withTranslate(Items);
