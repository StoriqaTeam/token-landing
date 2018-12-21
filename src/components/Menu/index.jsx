import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';
import find from 'lodash/find';
import MediaQuery from 'react-responsive';

import Items from './Items';

import './styles.sass';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenSelect: false,
      showMenuCls: 'show'
    };
  }

  componentWillMount() {
    document.addEventListener('click', this.closeSelect.bind(this));
    document.addEventListener('keydown', this.closeSelect.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeSelect.bind(this));
    document.removeEventListener('keydown', this.closeSelect.bind(this));
  }

  closeSelect(e) {
    const {items, button} = this.refs;

    if (!items || !button) return;

    const itemsDOM = findDOMNode(items);
    const buttonDOM = findDOMNode(button);

    if (!buttonDOM.contains(e.target) && !itemsDOM.contains(e.target)) {
      this.setState({isOpenSelect: false});
    }

    if (e.keyCode === 27) {
      this.setState({isOpenSelect: false});
    }
  }

  toggleSelect() {
    this.setState({
      isOpenSelect: !this.state.isOpenSelect
    });
  }

  render() {
    const {translate, handlePopup} = this.props;
    const {isOpenSelect, showMenuCls} = this.state;

    return (
      <div className="menu text-white">
        <MediaQuery maxWidth={991}>
          <div>
            <div
              ref="button"
              className={classNames('botton hidden-lg-up', {cross: isOpenSelect})}
              onClick={this.toggleSelect.bind(this)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            {<div
              ref="items"
              className={classNames('burger-items', {'hidden': !isOpenSelect})}>
              <Items
                onClick={this.closeSelect.bind(this)}
                handlePopup={handlePopup}
              />
            </div>}
          </div>
        </MediaQuery>
        <MediaQuery minWidth={992}>
          {<div className="default-items">
            <Items />
          </div>}
        </MediaQuery>
      </div>
    );
  }
}

export default withTranslate(Menu);
