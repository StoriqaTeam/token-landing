import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import {IntlActions} from 'react-redux-multilingual';
import classNames from 'classnames';
import find from 'lodash/find';

import {setLocale, getLocale} from 'helpers/locale';
import {languages, defaultLang} from 'helpers/lang';

import './styles.sass';

class Language extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenSelect: false
    };
  }

  componentWillMount() {
    let locale = getLocale('locale');
    const lang = window.location.search.match(/lang=([^&]*)/);
    const currentValue = lang ? find(languages, ['value', lang[1]]) : undefined;

    if (lang && currentValue && lang[1] !== locale) {
      this.props.setLocale(lang[1]);
      setLocale(lang[1]);

      return;
    }

    if (!currentValue && locale) {
      setLocale(locale);
    }

    if (!locale) {
      locale = window.navigator ? (window.navigator.language ||
               window.navigator.systemLanguage ||
               window.navigator.userLanguage) : defaultLang;

      locale = locale.substr(0, 2).toLowerCase();
      locale = find(languages, {value: locale}) ? locale : defaultLang;

      this.props.setLocale(locale);
      setLocale(locale);
    }

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
    this.setState({isOpenSelect: !this.state.isOpenSelect});
  }

  onClick(locale) {
    this.props.setLocale(locale);

    setLocale(locale);
  }

  render() {
    const {locale} = this.props.Intl;
    const {isOpenSelect} = this.state;
    const activeValue = find(languages, ['value', locale]).label;

    return (
      <div className="lang text-left open-sans-semibold">
        <div className="">
          {languages.map((item, i) => (
            <button
              key={i}
              className={classNames({active: item.value === locale})}
              onClick={this.onClick.bind(this, item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setLocale: (locale) => {
    dispatch(IntlActions.setLocale(locale));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Language);
