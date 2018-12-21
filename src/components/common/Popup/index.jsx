/* eslint-disable max-len */

import React, {Component} from 'react';
import classNames from 'classnames';

import './styles.sass';

class Popup extends Component {
  render() {
    const {medium, transparent, upClose} = this.props;
    return (
      <div ref="popup" className={classNames('popup-default visible', {medium, transparent, upClose})}>
        <div className="overlay"></div>
        <div className="content-wrap" style={{maxWidth: `${this.props.maxWidth}`}}>
          <div className="content">
            <button
              className="close"
              onClick={this.props.onClose}
            >
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
