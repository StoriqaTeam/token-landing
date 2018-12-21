/* eslint-disable max-len */

import React, {Component} from 'react';

import './styles.sass';

class Fixed extends Component {
  render() {
    return (
      <div className="fixed-wrapper">
        <a href="https://t.me/storiqa_en" target="_blank" className="icon" title="Storiqa Community">
          <img src={require('./img/icon-telegram.svg')} alt="Telegram Logo" />
        </a>
      </div>
    );
  }
}

export default Fixed;
