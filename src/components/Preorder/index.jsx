/* eslint-disable max-len */

import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';

import EmailInput from './EmailInput';
// import EmailMessage from './EmailMessage';
// import PhoneInput from './PhoneInput';
// import PhoneMessage from './PhoneMessage';
import Popup from './Popup';
// import TelegramIcon from 'components/TelegramIcon';

import './styles.sass';

class Preorder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      phone: '',
      isPopup: false,
      isCheckedAirdropCheckbox1: false,
      isCheckedAirdropCheckbox2: false
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

  closePopup(e) {
    const {popup} = this.refs;

    if (!popup) return;

    const popupDOM = findDOMNode(popup);

    if (popup && !popupDOM.contains(e.target)) {
      this.setState({isPopup: false});
      // this.props.hideParentPopup();
      this.toggleHiddenBody('');
    }

    if (e.keyCode === 27) {
      this.setState({isPopup: false});
      // this.props.hideParentPopup();
      this.toggleHiddenBody('');
    }
  }

  toggleHiddenBody(props) {
    document.body.style.overflow = props;
  }

  setEmailSubmitted(email) {
    this.setState({
      email,
      isPopup: true
    });

    this.toggleHiddenBody('hidden');
  }

  setPhoneSubmitted(phone) {
    this.setState({phone});

    localStorage.setItem('phone', phone);
  }

  handleToggleAirdropCheckbox(id) {
    if (id === 'airdrop-checkbox-1') {
      this.setState({isCheckedAirdropCheckbox1: !this.state.isCheckedAirdropCheckbox1});
    }
    if (id === 'airdrop-checkbox-2') {
      this.setState({isCheckedAirdropCheckbox2: !this.state.isCheckedAirdropCheckbox2});
    }
  }

  render() {
    const {translate, fixed, doc, start, airdrop, hideParentPopup, footer} = this.props;
    const {phone, email, isPopup, isCheckedAirdropCheckbox1, isCheckedAirdropCheckbox2} = this.state;

    return (
      <div className="subscribe d-block">
        <div className={classNames('d-flex', {
          'flex-column justify-content-start align-items-start': !fixed,
          'flex-md-row flex-column': fixed,
          airdrop,
          'for-footer': footer,
        })}>
          <div className={classNames('input-block email-input-block', {
            'long': !fixed
          })}>
            {doc && <a className="docs text-left d-inline-block mt-2" href={`${process.env.PUBLIC_URL}/static/docs/privacy_policy.pdf`} target="_blank">
              <span>.pdf</span> {translate('footer.privacy_policy')}
            </a>}
            <div className="appeal mb-2 text-left open-sans-bold">
              Join 110&nbsp;000+ subscribers and be the&nbsp;first to&nbsp;receive latest project news&nbsp;and&nbsp;updates:
            </div>
            <div>
              <EmailInput setEmailSubmitted={this.setEmailSubmitted.bind(this)} />
              {isPopup && <Popup>
                <div ref="popup" className="content-body pt-4 pb-4 pl-4 pr-4 text-center">
                  <div className="thank-text open-sans-semibold mt-2 mb-4">
                    Thank you for joining us!
                  </div>
                  <div className="body-text ml-auto mr-auto">
                    It’s almost done! Check your email for verification link.
                  </div>
                  {/* <div className="desc-button">
                    <a href={translate('main_info_section.telegram_link')} target="_blank" className="icon telegram telegram-after-subscribe" title="Storiqa Community">
                      <img
                        className="telegram-icon"
                        src={require('./img/icon-telegram.svg')}
                        alt="Telegram Logo"
                      />
                      <span className="icon-text text-white d-inline-block ml-3">{translate('main_info_section.telegram')}</span>
                    </a>
                  </div> */}
                </div>
              </Popup>}
            </div>
          </div>
          <div className="label">By signing up you agree to our <a href={`${process.env.PUBLIC_URL}/static/docs/privacy_policy.pdf`} target="_blank">Privacy&nbsp;Policy</a></div>
          {/* <div className="input-block phone-input-block">
            phone ? (
              <PhoneMessage message={translate('preorder.sms_success', {phone})} />
            ) : (
              <PhoneInput setPhoneSubmitted={this.setPhoneSubmitted.bind(this)} />
            )}
          </div> */}
          {/* <div className={classNames('docket', {
            'text-center text-md-left long': !fixed,
            'text-left': fixed
          })}>
            {!airdrop && <span>Join us for recieving latest news about project</span>}
            {airdrop && <div className="airdrop-wrap">
              <div className="checkboxes">
                <label htmlFor="airdrop-checkbox-1" className="airdrop-label d-flex">
                  <input
                    id="airdrop-checkbox-1"
                    type="checkbox"
                    className="airdrop-checkbox"
                    checked={isCheckedAirdropCheckbox1}
                    onChange={this.handleToggleAirdropCheckbox.bind(this, 'airdrop-checkbox-1')}
                  />
                  <span className="label">I agree to receive informational newsletters and commercial offers about&nbsp;Storiqa.</span>
                </label>
                <label htmlFor="airdrop-checkbox-2" className="airdrop-label d-flex">
                  <input
                    id="airdrop-checkbox-2"
                    type="checkbox"
                    className="airdrop-checkbox"
                    checked={isCheckedAirdropCheckbox2}
                    onChange={this.handleToggleAirdropCheckbox.bind(this, 'airdrop-checkbox-2')}
                  />
                  <span className="label">I agree to my personal data being stored and used. <a href={`${process.env.PUBLIC_URL}/static/docs/privacy_policy.pdf`} target="_blank">Privacy&nbsp;Policy</a></span>
                </label>
                {<div className="note">* only for new email Subscribers</div>}
              </div>
            </div>}
          </div> */}
        </div>
      </div>
    );
  }

}

export default withTranslate(Preorder);
