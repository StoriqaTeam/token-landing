import React from 'react';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';

import './styles.sass';

const Social = ({translate, className}) => {
  return (
    <div className={classNames('social-wrapper d-flex text-white', className)}>
      <a href="https://www.facebook.com/storiqa" target="_blank" className="">
        <i className="fa fa-facebook" aria-hidden="true" />
      </a>
      <a href="https://www.linkedin.com/showcase/24773372" target="_blank" className="ml-3">
        <i className="fa fa-linkedin" aria-hidden="true" />
      </a>
      <a href={translate('storiqa_link')} target="_blank" className="ml-3">
        <i className="fa fa-telegram" aria-hidden="true" />
      </a>
      <a href="https://twitter.com/storiqa" target="_blank" className="ml-3">
        <i className="fa fa-twitter" aria-hidden="true" />
      </a>
      <a href="https://medium.com/storiqa" target="_blank" className="ml-3">
        <img className="" src={require('./img/medium.svg')} />
      </a>
    </div>
  );
};

export default withTranslate(Social);
