/* eslint-disable max-len */

import React, {Component} from 'react';

import './styles.sass';

class Popup extends Component {
  render() {
    return (
      <div className={`popup-wrapper ${this.props.className}`}>
        <div className="overlay"></div>
        <div className="content-wrap">
          <div className="content">
            <button className="close">✕</button>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
