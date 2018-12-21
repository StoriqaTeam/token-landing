/* eslint-disable max-len */

import React, {Component} from 'react';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';
import MediaQuery from 'react-responsive';

import {Title, AngleContainer} from 'components/common';

const WhyBlochainSection = ({translate}) => (
  <AngleContainer className="why-blockchain-section" hiddenTop>
    <div className="container text-white">
      <Title text={translate('why_blockchain.title')} />
      <p className="description text-left mt-5">{translate('why_blockchain.desc')}</p>
      <div className="module">
        <div className="subtitle text-center open-sans-bold">{translate('why_blockchain.block_smart_contracts.title')}</div>
        <div className="row wrap">
          <div className="item col-12 col-lg-4 pt-5 pb-5 pl-4 pr-4">
            <div className="text-center mb-3">
              <img className="icon" src={require('./img/Icon_06.svg')} alt="World" />
              <img className="icon white" src={require('./img/Icon_06_white.svg')} alt="World" />
            </div>
            <div className="text-center mb-4 open-sans-bold">{translate('why_blockchain.block_smart_contracts.first.title')}</div>
            <div className="text open-sans text-center">{translate('why_blockchain.block_smart_contracts.first.text')}</div>
          </div>
          <div className="item col-12 col-lg-4 pt-5 pb-5">
            <div className="text-center mb-3">
              <img className="icon" src={require('./img/Icon_05.svg')} alt="Benefit" />
              <img className="icon white" src={require('./img/Icon_05_white.svg')} alt="Benefit" />
            </div>
            <div className="text-center mb-4 open-sans-bold">{translate('why_blockchain.block_smart_contracts.second.title')}</div>
            <div className="text open-sans text-center">{translate('why_blockchain.block_smart_contracts.second.text')}</div>
          </div>
          <div className="item col-12 col-lg-4 pt-5 pb-5">
            <div className="text-center mb-3">
              <img className="icon" src={require('./img/Icon_04.svg')} alt="Growth" />
              <img className="icon white" src={require('./img/Icon_04_white.svg')} alt="Growth" />
            </div>
            <div className="text-center mb-4 open-sans-bold">{translate('why_blockchain.block_smart_contracts.third.title')}</div>
            <div className="text open-sans text-center">{translate('why_blockchain.block_smart_contracts.third.text')}</div>
          </div>
        </div>
      </div>

      <div className="module">
        <div className="subtitle text-center open-sans-bold">{translate('why_blockchain.block_use_tokens.title')}</div>
        <div className="row wrap">
          <div className="item col-12 col-lg-4 pt-5 pb-5 pl-4 pr-4">
            <div className="text-center mb-3">
              <img className="icon" src={require('./img/Icon_03.svg')} alt="World" />
              <img className="icon white" src={require('./img/Icon_03_white.svg')} alt="World" />
            </div>
            <div className="text-center mb-4 open-sans-bold">{translate('why_blockchain.block_use_tokens.first.title')}</div>
            <div className="text open-sans text-center">{translate('why_blockchain.block_use_tokens.first.text')}</div>
          </div>
          <div className="item col-12 col-lg-4 pt-5 pb-5">
            <div className="text-center mb-3">
              <img className="icon" src={require('./img/Icon_02.svg')} alt="Benefit" />
              <img className="icon white" src={require('./img/Icon_02_white.svg')} alt="Benefit" />
            </div>
            <div className="text-center mb-4 open-sans-bold">{translate('why_blockchain.block_use_tokens.second.title')}</div>
            <div className="text open-sans text-center">{translate('why_blockchain.block_use_tokens.second.text')}</div>
          </div>
          <div className="item col-12 col-lg-4 pt-5 pb-5">
            <div className="text-center mb-3">
              <img className="icon" src={require('./img/Icon_01.svg')} alt="Growth" />
              <img className="icon white" src={require('./img/Icon_01_white.svg')} alt="Growth" />
            </div>
            <div className="text-center mb-4 open-sans-bold">{translate('why_blockchain.block_use_tokens.third.title')}</div>
            <div className="text open-sans text-center">{translate('why_blockchain.block_use_tokens.third.text')}</div>
          </div>
        </div>
      </div>
    </div>
  </AngleContainer>
);

export default withTranslate(WhyBlochainSection);
