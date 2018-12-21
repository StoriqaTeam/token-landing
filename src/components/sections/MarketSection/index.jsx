/* eslint-disable max-len */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';
import MediaQuery from 'react-responsive';

import {Title, DarkenedBlock, AngleContainer} from 'components/common';
import Angle from 'components/Angle';
import AnimationGraph from './AnimationGraph';

import {languages} from 'helpers/lang';

class MarketSection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: 1,
      isIE: false
    };
  }

  handleTab(activeTab) {
    this.setState({activeTab});
  }

  componentWillMount() {
    this.getNameBrowser();
  }

  getNameBrowser() {
    const ua = window.navigator.userAgent.toLowerCase();

    if ((/trident/gi).test(ua) || (/msie/gi).test(ua)) {
      this.setState({isIE: true});
    }
  }

  render() {
    const {activeTab, isIE} = this.state;
    const {translate, Intl} = this.props;

    return (
      <AngleContainer className="market-section">
        <div className="container text-white">
          <Title text={translate('market.title')} />
          <div className="tabs mb-5">
            <div className="row">
              <div
                className={classNames('col-12 col-sm-6 text-center p-2 p-sm-4 tab tab-first open-sans-bold d-flex align-items-center justify-content-center', {active: activeTab === 1})}
                id="1"
                onClick={this.handleTab.bind(this, 1)}
              >
                <span>{translate('market.section_1.title')}</span>
              </div>
              <div
                className={classNames('col-12 col-sm-6 text-center p-2 p-sm-4 tab tab-second open-sans-bold d-flex align-items-center justify-content-center', {active: activeTab === 2})}
                id="2"
                onClick={this.handleTab.bind(this, 2)}
              >
                <span>{translate('market.section_2.title')}</span>
              </div>
            </div>
          </div>
          <div className="row images">
            <div className={classNames('col-12 text-center img', {visible: activeTab === 1})}>
              {Intl && !isIE && languages.map((i) => {
                return <div key={i.value}>
                  {Intl.locale === i.value && <AnimationGraph />}
                </div>;
              })}
              {isIE && <div>
                <MediaQuery maxWidth={575}>
                  <img src={require(`./img/${translate('market.section_1.img_576')}.png`)} alt="Boost" className="" />
                </MediaQuery>
                <MediaQuery minWidth={576} maxWidth={767}>
                  <img src={require(`./img/${translate('market.section_1.img_768')}.png`)} alt="Boost" className="" />
                </MediaQuery>
                <MediaQuery minWidth={768}>
                  <img src={require(`./img/${translate('market.section_1.img_992')}.png`)} alt="Boost" className="" />
                </MediaQuery>
              </div>}
            </div>
            <div className={classNames('col-12 text-center img', {visible: activeTab === 2})}>
              <MediaQuery maxWidth={575}>
                <img src={require(`./img/${translate('market.section_2.img_576')}.png`)} alt="Growth" className="" />
              </MediaQuery>
              <MediaQuery minWidth={576} maxWidth={767}>
                <img src={require(`./img/${translate('market.section_2.img_768')}.png`)} alt="Growth" className="" />
              </MediaQuery>
              <MediaQuery minWidth={768}>
                <img src={require(`./img/${translate('market.section_2.img_992')}.png`)} alt="Growth" className="" />
              </MediaQuery>
            </div>
          </div>
        </div>
      </AngleContainer>
    );
  }
}

const mapStateToProps = (state) => state;

export default withTranslate(connect(mapStateToProps)(MarketSection));
