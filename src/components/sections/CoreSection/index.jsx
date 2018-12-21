/* eslint-disable max-len */

import React, {Component} from 'react';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';
import MediaQuery from 'react-responsive';

import {Title} from 'components/common';

import Item from './Item';

class CoreSection extends Component {
  render() {
    const {translate} = this.props;

    return (
      <section className="core-section text-white">
        <div className="container">
          <Title text="CORE" whiteline />
          <div className="row present-body pt-5">
            <div className="col-12 col-lg-6 left-half">
              <Item
                hanger
                data1={{
                  leftText: 'Billing',
                  status: 'Deployed',
                  color: 'green'
                }}
              />
              <Item
                hanger
                data1={{
                  leftText: 'Profiles configuring',
                  status: 'Deployed',
                  color: 'green'
                }}
              />
              <Item
                hanger
                data1={{
                  leftText: 'Authorization & Permissions',
                  status: 'Deployed',
                  color: 'green'
                }}
              />
              <Item
                data1={{
                  leftText: 'Arbitrage system',
                  status: 'In progress',
                  color: 'blue'
                }}
              />
              <Item
                hanger
                data1={{
                  leftText: 'Notification',
                  status: 'Deployed',
                  color: 'green'
                }}
              />
              <Item
                data1={{
                  leftText: 'Process configure module',
                  status: 'Planned',
                  color: 'grey'
                }}
              />
            </div>
            <div className="col-12 col-lg-6 right-half">
              <Item
                hanger
                data1={{
                  leftText: 'Sync services handlers',
                  status: 'Deployed',
                  color: 'green'
                }}
              />
              <Item
                hanger
                data1={{
                  leftText: 'Security module',
                  status: 'Deployed',
                  color: 'green'
                }}
              />
              <Item
                hanger
                data1={{
                  leftText: 'Admin module',
                  status: 'Deployed',
                  color: 'green'
                }}
              />
              <Item
                data1={{
                  leftText: 'Internal cryptocurrency & fiat exchange',
                  status: 'In progress',
                  color: 'blue'
                }}
              />
            </div>
          </div>
          <div className="row present-body footer-i-block">
            <div className="col-12 col-lg-6 left-half-infrastucture">
              <Item
                hanger
                data1={{
                  leftText: 'Centralized Infrastructure',
                  status: 'Deployed',
                  color: 'green'
                }}
              />
            </div>
            <div className="col-12 col-lg-6 right-half-infrastucture">
              <Item
                data1={{
                  leftText: 'Decentralized Infrastructure',
                  status: 'In progress',
                  color: 'blue'
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="ib">INTEGRATION BUS</div>
            </div>
          </div>
          <div className="additionally text-center">
            <div className="d-inline-block">
              <img className="" src={require('./img/external-srvices.svg')} />
              <span className="text">External services<br />& representatives</span>
            </div>
          </div>
        </div>
        <div className="core-bg">
          <img className="" src={require('./img/core-bg.svg')} />
        </div>
      </section>
    );
  }
}

export default withTranslate(CoreSection);
