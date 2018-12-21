/* eslint-disable max-len */

import React, {Component} from 'react';

import './styles.sass';

class Popup extends Component {
  render() {
    return (
      <div className="popup-subscribe-wrapper visible">
        <div className="overlay"></div>
        <div className="content-wrap">
          <div className="content">
            <button className="close">
              <img src={require('./img/cross.svg')} alt="✕" />
            </button>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
