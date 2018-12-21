/* eslint-disable max-len */

import React, {Component} from 'react';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';
import MediaQuery from 'react-responsive';

import {Title} from 'components/common';

import Item from './Item';

import './styles.sass';

class CoreSection extends Component {
  render() {
    const {translate} = this.props;

    return (
      <section className="core-section text-white">
        <div className="container">
          <Title text="CORE" />
          <div className="row">
            <div className="col-12 col-lg-6 left-half">
              <Item
                hanger
                data1={{
                  leftText: 'Product services',
                  status: 'Deployed',
                  color: 'green'
                }}
                data2={{
                  leftText: 'Landing page',
                  status: 'In progress',
                  color: 'blue'
                }}
              />
              <Item
                data1={{
                  leftText: 'Smart search',
                  status: 'Deployed',
                  color: 'green'
                }}
              />
              <Item
                data1={{
                  leftText: 'Ordering & payment',
                  status: 'Waiting',
                  color: 'grey'
                }}
              />
              <Item
                hanger
                data1={{
                  leftText: 'Product cards',
                  status: 'Waiting',
                  color: 'green'
                }}
              />
              <Item
                hanger
                data1={{
                  leftText: 'Cart',
                  status: 'Waiting',
                  color: 'blue'
                }}
              />
              <Item
                data1={{
                  leftText: 'Smart review system',
                  status: 'Waiting',
                  color: 'blue'
                }}
              />
            </div>
            <div className="col-12 col-lg-6 right-half">
              <Item
                hanger
                data1={{
                  leftText: 'Store CRM',
                  status: 'Deployed',
                  color: 'green'
                }}
              />
              <Item
                hanger
                data1={{
                  leftText: 'Store editor',
                  status: 'In progress',
                  color: 'blue'
                }}
              />
              <Item
                hanger
                data1={{
                  leftText: 'Store creation wizard',
                  status: 'In progress',
                  color: 'blue'
                }}
              />

              <div className="chapter">
                <div className="chapter-title open-sans-semibold">CPA</div>
                <div className="chapter-items">
                  <div className="additionally">
                    <img className="" src={require('./img/traffic-owner.svg')} />
                    <span className="text">Traffic owner</span>
                  </div>
                  <Item
                    hanger
                    data1={{
                      leftText: 'Traffic cabinet',
                      status: 'In progress',
                      color: 'grey'
                    }}
                  />
                  <Item
                    data1={{
                      leftText: 'RFPs & Offers',
                      status: 'In progress',
                      color: 'grey'
                    }}
                  />
                  <Item
                    data1={{
                      leftText: 'Traffic cabinet',
                      status: 'In progress',
                      color: 'blue'
                    }}
                  />
                </div>
              </div>

              <div className="chapter">
                <div className="chapter-title open-sans-semibold">Marketing assist</div>
                <div className="chapter-items">
                  <div className="additionally">
                    <img className="" src={require('./img/content-makers.svg')} />
                    <span className="text">hhhhhhhh</span>
                  </div>
                  <Item
                    hanger
                    data1={{
                      leftText: 'Marketing design',
                      status: 'In progress',
                      color: 'blue'
                    }}
                  />
                  <Item
                    data1={{
                      leftText: 'Marketing descriptions',
                      status: 'In progress',
                      color: 'green'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslate(CoreSection);
