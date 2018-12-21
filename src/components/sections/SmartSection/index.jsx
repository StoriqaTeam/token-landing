import React from 'react';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';

import {Title, AngleContainer, ButtonEmpty} from 'components/common';

const SmartSection = ({translate}) => (
  <AngleContainer className="smart-section" hiddenBottom>
    <div className="container text-white">
      <Title text={translate('github.title')} />
      <p className="description text-center text-white mt-5">{translate('github.desc')}</p>
      <div className="row d-flex justify-content-center">
        <div className="col-12 text-center">
          <MediaQuery maxWidth={575}>
            <img src={require('./img/github_576.png')} alt="Demand" className="" />
          </MediaQuery>
          <MediaQuery minWidth={576} maxWidth={767}>
            <img src={require('./img/github_768.png')} alt="Demand" className="" />
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <img src={require('./img/github_992.png')} alt="Demand" className="" />
          </MediaQuery>
        </div>
        <div className="col-12 mt-5 text-center">
          <ButtonEmpty href="https://github.com/Storiqa/ico_smart_contract">
            {translate('github.button')}
          </ButtonEmpty>
        </div>
      </div>
    </div>
  </AngleContainer>
);

export default withTranslate(SmartSection);

