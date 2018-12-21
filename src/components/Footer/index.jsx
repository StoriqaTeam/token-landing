/* eslint-disable max-len */

import React from 'react';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';
import {find, get} from 'lodash';

import Social from 'components/Social';
import Preorder from 'components/Preorder';
import Countdown from 'components/Countdown';
import InvestedSum from 'components/InvestedSum';
import FinishedThermBlock from 'components/FinishedThermBlock';

import {started} from 'helpers/constants';
import {totalUSDOld, USDInvest} from 'helpers/oldCurrencyData';
import formatNumber from 'helpers/formatNumber';

import {Spiner} from 'components/common';

import {buyTokensURL, withdrawURL} from 'helpers/constants';

import 'font-awesome/css/font-awesome.css';
import './styles.sass';

const year = (new Date()).getFullYear();

const Footer = ({translate, className, isContribute, tokensData, ICOMainInfo}) => {
  const stage = find(ICOMainInfo.ico_stages, {'id': ICOMainInfo.current_stage_id});
  // const totalUSD = Math.round(Number(tokensData.amount) + totalUSDOld + USDInvest);
  const totalUSD = 25000000;
  const isFinished = true;

  const milestoneAmount = totalUSD < 22000000 ? 22000000 : 25000000;

  const leftWidth = totalUSD < milestoneAmount ? totalUSD * 100 / milestoneAmount : 100;
  const rightWidth = 100 - leftWidth;

  const softCapHintLeft = 5.2 * 100000000 / milestoneAmount;
  const milestoneValue = totalUSD < 22000000 ? `${translate('main_info_section.count_down_block.milestone')} 8` : translate('main_info_section.count_down_block.hard_cap');

  const bonusPreferences = get(stage, 'bonus_preferences[0].bonus_percent', undefined);

  return (<footer className={classNames('footer', 'text-center', className)}>
    <div className="bg" />
    <div className="container">
      <div className="bottom-path">
        <figure className="d-block mt-5 mb-5 logo">
          <img src={require('img/storiqa-grey-logo.svg')} alt="Storiqa Logo" />
        </figure>
        <div className="row contacts mb-5">
          <div className="local d-inline-block d-md-block text-left">
            <div className="d-md-inline-block mb-4">
              <span className="title">{translate('footer.head_office.title')}</span><br/>
              {translate('footer.head_office.address', null, true)}
            </div>
            <div className="d-md-inline-block">
              <span className="title">{translate('footer.dev_office.title')}</span><br/>
              {translate('footer.dev_office.address', null, true)}
            </div>
          </div>
        </div>
        <div className="text-white mb-5">
          <Preorder airdrop footer />
        </div>
        <div className="social pt-2 pb-2 mb-5" id="contact_us">
          <Social className="justify-content-around" />
          <div className="mail-block">
            Listings, PR and other proposal please send to the following e-mail
            <div className="mail-value">
              <img src={require('img/mailIcon.png')} alt="mail" />
              <a href="mailto:business@storiqa.com">business@storiqa.com</a>
            </div>
          </div>
        </div>
        <div className="copyright mb-5 pl-2 pr-2">
          <p className="d-block text-white">© Storiqa, {year}. {translate('footer.rights')}</p>
          <p className="d-block text-white">{translate('footer.cookie')}</p>
          <div className="row contacts mb-5 mt-5">
            <div className="local d-inline-block d-md-block text-left">
              <div className="d-md-inline-block">
                <a className="docs text-left d-inline-block mt-2" href={`${process.env.PUBLIC_URL}/static/docs/general_terms_and_conditions.pdf`} target="_blank">
                  <span>.pdf</span> {translate('footer.general_terms')}
                </a><br />
                <a className="docs text-left d-inline-block mt-2" href={`${process.env.PUBLIC_URL}/static/docs/privacy_policy.pdf`} target="_blank">
                  <span>.pdf</span> {translate('footer.privacy_policy')}
                </a><br />
                <a className="docs text-left d-inline-block mt-2" href={`${process.env.PUBLIC_URL}/static/docs/token_sale_policy.pdf`} target="_blank">
                  <span>.pdf</span> {translate('footer.token_policy')}
                </a><br />
                <a className="docs text-left d-inline-block mt-2" href={`${process.env.PUBLIC_URL}/static/docs/kyc_aml.pdf`} target="_blank">
                  <span>.pdf</span> KYC/AML data processing statement
                </a>
              </div>
              <div className="d-md-inline-block">
                <a className="docs text-left d-inline-block mt-2" href={`${process.env.PUBLIC_URL}/static/docs/token_design_howey_test.pdf`} target="_blank">
                  <span>.pdf</span> {translate('footer.token_design')}
                </a><br />
                <a className="docs text-left d-inline-block mt-2" href={`${process.env.PUBLIC_URL}/static/docs/smart_contract_audit_results.pdf`} target="_blank">
                  <span>.pdf</span> {translate('footer.smart_contract_audit')}
                </a><br />
                <a className="docs text-left d-inline-block mt-2" href={`${process.env.PUBLIC_URL}/static/docs/smart_contract_compliance_certificate.jpg`} target="_blank">
                  <span>.jpg</span> {translate('footer.smart_contract_certificate')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>);
};

export default withTranslate(Footer);
