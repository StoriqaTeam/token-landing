/* eslint-disable max-len */

import React from 'react';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';

import './styles.sass';

const Roadmap = () => {
  return (
  <section className="roadmap" id="roadmap">
    <h1 className="h1 text-center">Roadmap</h1>
    <div className="container-fluid">
      <div className="row example-split d-flex justify-content-center">
        <div className="split-wrapper">
          <ul className="timeline-new timeline-split">
            <li className="timeline-item period period-start">
              <div className="timeline-info"></div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <p className="timeline-title"><b>2016</b></p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>2-3 quarter</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-title"><b>Market demands study</b></div>
                <ul>
                  <li>Market analysis and analysis of the needs of customers and businesses</li>
                  <li>Recruitment of early token holders for creating the prerelease version of the product ($200&nbsp;000)</li>
                  <li>Testing the business’s launch to the international market</li>
                  <li>Engagement of the first sellers. Development of the strategy of business’s launch to the international market</li>
                  <li>Marketplace design project. Launch of the first stores to the international market. Resolving product logistics issues</li>
                </ul>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>4 quarter</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-title"><b>Product development start</b></div>
                <ul>
                  <li>Marketplace development. Resolving international marketing issues</li>
                  <li>Resolving multilingual support issues</li>
                </ul>
              </div>
            </li>
            <li className="timeline-item period">
              <div className="timeline-info"></div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <p className="timeline-title"><b>2017</b></p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>1-2 quarter</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-title"><b>The earliest version of the product</b></div>
                <ul>
                  <li>The development of the first version of the store</li>
                  <li>Preparation for use of the blockchain technology in the project</li>
                  <li>Start of composing the Whitepaper</li>
                  <li>Engaging the stores in the platform testing</li>
                  <li>The introduction of the stores to the platform potential.</li>
                  <li>Store builder.</li>
                  <li>Comprehensive catalog of all items.</li>
                  <li>Basic online store functions.</li>
                  <li>The second round of financing ($300,000)</li>
                </ul>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>3 quarter</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-title"><b>Token sale preparation</b></div>
                <ul>
                  <li>The alpha version of the product.</li>
                  <li>Start of marketing campaigns on Token sale.</li>
                  <li>Start of creating the Storiqa community</li>
                  <li>Token&nbsp;Pre&#8209;sale</li>
                  <li>The presentation of the project for early token holders.</li>
                  <li>Pre-sale funding ($500.000)</li>
                </ul>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>4 quarter</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-title"><b>Token&nbsp;Pre&#8209;sale and Token&nbsp;sale</b></div>
                <ul>
                  <li>The presentation of the basic functionality to the stores</li>
                  <li>The project presentation for token holders</li>
                  <li>Start of funding for the launch of the product to the market</li>
                  <li>The project presentation for token holders in worldwide</li>
                  <li>The product demo version</li>
                  <li>Completion Token sale</li>
                  <li>MVP</li>
                </ul>
              </div>
            </li>
            <li className="timeline-item period">
              <div className="timeline-info"></div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <p className="timeline-title"><b>2018</b></p>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>1-2 quarter</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-title"><b>Cryptocurrency payment and smart contract implementation</b></div>
                <ul>
                  <li>Acceptance of cryptocurrency payments Internal currency exchange system and Multicurrency digital wallet</li>
                  <li>Launch of the first points of the verification of Storiqa</li>
                  <li>Warehouse accounting system launch</li>
                  <li>Smart contracts integrated with logistics systems</li>
                </ul>
              </div>
            </li>
            <li className="timeline-item">
              <div className="timeline-info">
                <span>3-4 quarter</span>
              </div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-title"><b>Efficient promotion&nbsp;& Integration</b></div>
                <ul>
                  <li>Unblocking 5% of development fund</li>
                  <li>Efficient promotion tools</li>
                  <li>Mobile application development</li>
                  <li>Localization in additional languages</li>
                  <li>Launch of the internal CPA network for opinion leaders</li>
                  <li>Unblocking 5% of development fund US market entry</li>
                  <li>Development of additional functions Integration with third-party services</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
};

export default withTranslate(Roadmap);
