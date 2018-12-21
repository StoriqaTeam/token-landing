/* eslint-disable max-len */

import React, {Component} from 'react';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';
import MediaQuery from 'react-responsive';

import CoreSection from './CoreSection';
import {Title, AngleContainer} from 'components/common';

import Item from './Item';

class PresentSection extends Component {
  render() {
    const {translate} = this.props;

    return (
      <AngleContainer className="present-section text-white" hiddenBottom>
        <div className="container">
          <Title
            text="THANKS FOR YOUR SUPPORT DURING THE TOKEN SALE!"
            subtext="Now our focus is the product. Here’s what we’re working on right now."
          />
          <div className="present-img pt-4 mt-5">
            {/* <MediaQuery minWidth={576} maxWidth={767}>
              <div>Hi!</div>
            </MediaQuery>
            <MediaQuery minWidth={768}>
              <img className="" src={require('./img/present.svg')} alt="Present" />
            </MediaQuery> */}
            <img className="" src={require('./img/present.svg')} alt="Present" />
          </div>
          <div className="row present-body">
            <div className="col-12 col-lg-6 left-half">
              <div className="half-title hidden-lg-up">B2C Section</div>
              <div className="stick">
                <Item
                  hanger
                  data1={{
                    leftText: 'Home landing page',
                    status: 'Deployed',
                    color: 'green'
                  }}
                />
              </div>
              <Item
                hanger
                data1={{
                  leftText: 'Smart search',
                  status: 'Deployed',
                  color: 'green'
                }}
              />
              <Item
                hanger
                data1={{
                  leftText: 'Ordering & payment',
                  status: 'In progress',
                  color: 'blue'
                }}
              />
              <Item
                hanger
                data1={{
                  leftText: 'Product cards',
                  status: 'Deployed',
                  color: 'green'
                }}
              />
              <Item
                hanger
                data1={{
                  leftText: 'Cart',
                  status: 'Deployed',
                  color: 'green'
                }}
              />
              <Item
                data1={{
                  leftText: 'Cashback system',
                  status: 'Planned',
                  color: 'grey'
                }}
              />
              <Item
                data1={{
                  leftText: 'Smart review system',
                  status: 'In progress',
                  color: 'blue'
                }}
              />
            </div>
            <div className="col-12 col-lg-6 right-half">
              <div className="half-title hidden-lg-up">B2B Section</div>
              <div className="stick">
                <Item
                  data1={{
                    leftText: 'Store CRM',
                    status: 'In progress',
                    color: 'blue'
                  }}
                />
              </div>
              <Item
                hanger
                data1={{
                  leftText: 'Store editor',
                  status: 'Deployed',
                  color: 'green'
                }}
              />
              <Item
                hanger
                data1={{
                  leftText: 'Store creation wizard',
                  status: 'Deployed',
                  color: 'green'
                }}
              />

              {<div className="chapter">
                <div className="chapter-title open-sans-semibold">CPA</div>
                <div className="chapter-items">
                  <div className="additionally">
                    <img className="" src={require('./img/traffic-owner.svg')} />
                    <span className="text">Traffic&nbsp;owner</span>
                  </div>
                  <Item
                    data1={{
                      leftText: 'Traffic cabinet',
                      status: 'In progress',
                      color: 'blue'
                    }}
                  />
                  <Item
                    data1={{
                      leftText: 'RFPs & Offers',
                      status: 'In progress',
                      color: 'blue'
                    }}
                  />
                </div>
              </div>}

              <div className="chapter">
                <div className="chapter-title open-sans-semibold">Marketing assist</div>
                <div className="chapter-items">
                  <div className="additionally">
                    <img className="" src={require('./img/content-makers.svg')} />
                    <span className="text">Content&nbsp;makers</span>
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
                    hanger
                    data1={{
                      leftText: 'Marketing descriptions',
                      status: 'In progress',
                      color: 'blue'
                    }}
                  />
                </div>
              </div>

              <div className="chapter">
                <div className="chapter-title open-sans-semibold">Quality Assurance & Logistics</div>
                <div className="chapter-items">
                  <div className="additionally">
                    <img className="" src={require('./img/logistics.svg')} />
                    <span className="text">QA&nbsp;&amp;&nbsp;Logistics Representatives</span>
                  </div>
                  <Item
                    data1={{
                      leftText: 'QA procedures',
                      status: 'Planned',
                      color: 'grey'
                    }}
                  />
                  <Item
                    hanger
                    data1={{
                      leftText: 'Delivery status tracking',
                      status: 'In progress',
                      color: 'blue'
                    }}
                  />
                </div>
              </div>

              <div className="chapter">
                <div className="chapter-title open-sans-semibold">Support module</div>
                <div className="chapter-items">
                  <div className="additionally">
                    <img className="" src={require('./img/support.svg')} />
                    <span className="text">Support&nbsp;service representatives &amp;&nbsp;Call-center</span>
                  </div>
                  <Item
                    hanger
                    data1={{
                      leftText: 'Customer service module',
                      status: 'In progress',
                      color: 'blue'
                    }}
                  />
                  <Item
                    hanger
                    data1={{
                      leftText: 'Service provider module',
                      status: 'In progress',
                      color: 'blue'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {false && <CoreSection />}
      </AngleContainer>
    );
  }
}

export default withTranslate(PresentSection);
