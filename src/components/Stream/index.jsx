import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';

import Popup from './Popup';

import './styles.sass';

const STREAMS = {
  'en': 'https://www.youtube.com/embed/oprgxMyqnqw',
  'cn': 'https://www.youtube.com/embed/iLGNPGy-iOI',
  'kr': 'https://www.youtube.com/embed/yYDuv7oEg2U',
  'jp': 'https://www.youtube.com/embed/tKSvvRVWvwA',
  // 'ru': 'https://www.youtube.com/embed/s8bCybECBtM',
  'fr': 'https://www.youtube.com/embed/foFBnwK7il0',
  'es': 'https://www.youtube.com/embed/7m9Fpxz5ujI',
  'de': 'https://www.youtube.com/embed/D4nhWtbbjIk'
};

class Stream extends Component {
  constructor(props) {
    super(props);

    const lang = localStorage.getItem('stream_lang') || 'en';

    localStorage.setItem('stream_lang', lang);

    this.state = {
      url: STREAMS[lang],
      lang,
      isPopup: false
    };
  }

  componentWillMount() {
    document.addEventListener('click', this.closePopup.bind(this));
    document.addEventListener('keydown', this.closePopup.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closePopup.bind(this));
    document.removeEventListener('keydown', this.closePopup.bind(this));
  }

  setStream(lang) {
    localStorage.setItem('stream_lang', lang);

    this.setState({lang, url: STREAMS[lang]});
  }

  openPopup() {
    this.setState({isPopup: true});

    this.toggleHiddenBody('hidden');
  }

  closePopup(e) {
    const {iframe, popupButton} = this.refs;

    if (!iframe || !popupButton) return;

    const iframeDOM = findDOMNode(iframe);
    const popupButtonDOM = findDOMNode(popupButton);

    if ((iframe && iframeDOM.contains(e.target)) && (popupButton && !popupButtonDOM.contains(e.target))) {
      this.setState({isPopup: false});

      this.toggleHiddenBody('');
    }

    if (e.keyCode === 27) {
      this.setState({isPopup: false});

      this.toggleHiddenBody('');
    }
  }

  toggleHiddenBody(props) {
    document.body.style.overflow = props;
  }

  render() {
    const {url, lang, isPopup} = this.state;
    const {children} = this.props;

    return (
      <div className="stream-wrapper" ref="iframe">
        <Popup
          className={classNames({'visible': isPopup})}>
          {isPopup && <iframe
            src="https://www.youtube.com/embed/fifjeFIsBEc?autoplay=1&amp"
            frameBorder="0"
            allowFullScreen
            height="100%"
            width="100%" />}
        </Popup>

        <div ref="popupButton" className="preview-block" onClick={this.openPopup.bind(this)}>
          {children}
        </div>

        {/* <ul className="pt-3 pl-0">
          {Object.keys(STREAMS).map((key) => (
            <li onClick={this.setStream.bind(this, key)} key={key}
                className={classNames({'btn-primary blue': key === lang})}>
              {key}
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default Stream;
