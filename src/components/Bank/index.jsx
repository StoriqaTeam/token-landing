/* eslint-disable max-len */

import React, {Component} from 'react';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';
import axios from 'axios';

import Slider from './Slider';

import api from 'helpers/api';
import formatNumber from 'helpers/formatNumber';

import './styles.sass';

const currencies = ['BTC', 'ETH', 'USDT', 'DASH', 'LTC', 'NEO', 'BCH', 'ETC', 'BCC', 'QTUM', 'STRAT', 'DOGE', 'ZEC', 'WAVES', 'LSK', 'SYS', 'EXP', 'MAID', 'DGB', 'PPC'];

class Bank extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deposit: {},
      ICOMainInfo: {}
    };
  }

  componentWillMount() {
    axios.get('https://tokensale.storiqa.com/ico-raised?authorization_key=storiqatothemoon')
      .then(({data}) => {
        this.setState({deposit: data.deposit});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {deposit} = this.state;

    return (
      <div className="bank-wrapper">
        <Slider />
        {/* <div className="currencies">
          {currencies.map(item => {
            const value = deposit[item] ? Number(deposit[item]).toFixed(2) : '0.00';

            return <div key={item} className="item d-inline-block">
              <img className="icon" src={require(`./icons/${item}.png`)} alt="World" />
              <span className="abb ml-2">{item}:</span>
              <span className="value ml-1">{value}</span>
            </div>;
          })}
        </div> */}
      </div>
    );
  }
}

export default withTranslate(Bank);
