/* eslint-disable max-len */

import React, {Component} from 'react';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';
import MediaQuery from 'react-responsive';

import Item from './Item';

class InfrastructureSection extends Component {
  render() {
    const {translate} = this.props;

    return (
      <section className="infrastructure-section text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="title open-sans-semibold text-center">Centralized Infrastructure*<br /><span>&nbsp;</span></div>
              <div className="body left">
                <div className="row first-lines">
                  <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                    <Item
                      data1={{
                        leftText: 'Mobile-level',
                        status: 'Deployed',
                        color: 'green'
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 col-xl-6 second">
                    <Item
                      data1={{
                        leftText: 'Web-level',
                        status: 'Deployed',
                        color: 'green'
                      }}
                    />
                  </div>
                </div>

                <div className="row d-flex justify-content-center center-block">
                  <div className="second-lines col-12 col-md-6 col-lg-12 col-xl-6">
                    <Item
                      data1={{
                        leftText: 'App-level',
                        status: 'Deployed',
                        color: 'green'
                      }}
                    />
                  </div>
                </div>

                <div className="row third-lines">
                  <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                    <Item
                      data1={{
                        leftText: 'DB-level',
                        status: 'Deployed',
                        color: 'green'
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-12 col-xl-6 second">
                    <Item
                      data1={{
                        leftText: 'Network level',
                        status: 'Deployed',
                        color: 'green'
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="footnote">* — for the data of no doubts</div>
            </div>
            <div className="col-12 col-lg-6 mt-5 mt-lg-0">
              <div className="title open-sans-semibold text-center">Decentralized Infrastructure<br /><span className="open-sans">(Blockchain**)</span></div>
              <div className="body">
                <div className="caption">
                  <div className="item-block d-flex flex-row align-items-start">
                    <div className="left open-sans-semibold">Test Net</div>
                    <div className="right blue">In progress</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-5 d-flex flex-row d-lg-block">
                    <div className="block top-block">Payments</div>
                    <div className="block bottom-block">Data verification & Accounting</div>
                  </div>
                  <div className="col-12 col-lg-7 d-flex align-items-stretch img-theme">
                    <div className="block right-block d-flex flex-row">
                      <div className="d-flex align-items-lg-start align-items-center">Smart Contract execution environment</div>
                      <div className="d-flex align-items-end">
                        <img className="" src={require('./img/thing.svg')} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="caption mt-4 pt-4 pt-lg-2">
                  <div className="item-block d-flex flex-row align-items-start">
                    <div className="left open-sans-semibold">Main Net</div>
                    <div className="right grey">Planned</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-5 d-flex flex-row d-lg-block">
                    <div className="block top-block">Payments</div>
                    <div className="block bottom-block">Data verification & Accounting</div>
                  </div>
                  <div className="col-12 col-lg-7 d-flex align-items-stretch img-theme">
                    <div className="block right-block d-flex flex-row">
                      <div className="d-flex align-items-lg-start align-items-center">Smart Contract execution environment</div>
                      <div className="d-flex align-items-end">
                        <img className="" src={require('./img/thing.svg')} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footnote footnote-right d-inline-block">** — for the data requiring verification & consensus</div>
              <div className="additionally text-right d-inline-block">
                <img className="" src={require('./img/miners.svg')} /><br />
                <span className="text">Miners &<br />cryptoenthusiasts</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslate(InfrastructureSection);
