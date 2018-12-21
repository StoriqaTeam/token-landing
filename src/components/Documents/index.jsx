import React from 'react';
import {connect} from 'react-redux';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';

import './styles.sass';

let Documents = ({translate, Intl, isButton, className=''}) => (
  Intl.locale === 'ru' ? (
    <a href={`${process.env.PUBLIC_URL}/static/docs/TS-white-paper-RU.pdf`} target="_blank"
       className={classNames(className, {'btn btn-primary btn-lg blue': isButton})}>
      {isButton && <img className="img mr-3" src={require('./img/doc-download.svg')} alt="Скачать" />}
      <span className="color">Whitepaper</span>
    </a>
  ) : (
    <a href={`${process.env.PUBLIC_URL}/static/docs/TS-white-paper-EN.pdf`} target="_blank"
       className={classNames(className, {'btn btn-primary btn-lg blue': isButton})}>
      {isButton && <img className="img mr-3" src={require('./img/doc-download.svg')} alt="Download" />}
      <span className="color">{translate('main_info_section.whitepaper')}</span>
    </a>
  )
);

Documents = withTranslate(Documents);

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Documents);
