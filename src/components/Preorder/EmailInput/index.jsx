/* eslint-disable max-len */

import React, {Component} from 'react';
import {withTranslate} from 'react-redux-multilingual';
import classNames from 'classnames';

import api from 'helpers/api';
import normalize from 'helpers/normalize';
import Spiner from 'components/common/Spiner';

import prepareData from 'components/Preorder/prepareData';

import './styles.sass';

class EmailInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      validError: false,
      isFocus: false,
      serverError: false,
      didYouMean: null
    };
  }

  emailChange(e) {
    this.setState({email: e.target.value, validError: false});
  }

  emailFocus() {
    this.setState({isFocus: true});
  }

  emailBlur() {
    this.setState({isFocus: false});
  }

  emailSubmit(e) {
    e.preventDefault();

    const email = normalize('email', this.state.email);

    this.setState({
      validError: false,
      isLoading: true,
      serverError: false,
      alreadySigned: false,
      didYouMean: null
    });

    api().post('/validate', {email})
    .then(({data: validData}) => {
      if (validData.did_you_mean) {
        this.setState({
          didYouMean: validData.did_you_mean,
          isLoading: false
        });
      } else {
        if (validData.is_valid) {
          api().post('/subscribe', prepareData('email', email))
          .then(({data}) => {
            if (data.isValid) {
              this.setState({isLoading: false, validError: true});
            } else {
              this.setState({isLoading: false});
              if (data.inserted === 0) { // already signed
                this.setState({alreadySigned: true});
              } else if (data.inserted === 1) { // new email
                this.props.setEmailSubmitted(email);
                localStorage.setItem('person_id', data ? data.person_id : null);
                localStorage.setItem('person_email', validData ? validData.address : null);

                dataLayer.push(
                  {'event': 'GAEvent', 'eventCategory': 'formico', 'eventAction': 'submit', 'eventLabel': 'email'}
                );

                fbq('track', 'Lead');
              }
            }
          })
          .catch((err) => {
            console.log('Error', err);
            this.setState({
              isLoading: false,
              alreadySigned: false,
              validError: false,
              serverError: true
            });
          });
        } else {
          this.setState({
            validError: true,
            isLoading: false,
          });
        }
      }
    })
    .catch((err) => {
      console.log('Error', err);
      this.setState({
        isLoading: false,
        alreadySigned: false,
        validError: false,
        serverError: true
      });
    });
  }

  handleDidYouMeanOnClick() {
    this.setState({email: this.state.didYouMean});
  }

  render() {
    const {translate, disabled} = this.props;
    const {
      validError,
      isLoading,
      isFocus,
      alreadySigned,
      serverError,
      email,
      didYouMean
    } = this.state;
    const disabledValue = email.length === 0 || isLoading;

    return (
      <form onSubmit={this.emailSubmit.bind(this)}>
        <div className={classNames('input-group-custom', {disabled: disabledValue})}>
          <input
            type="text"
            onChange={this.emailChange.bind(this)}
            onFocus={this.emailFocus.bind(this)}
            onBlur={this.emailBlur.bind(this)}
            className={classNames('form-control form-control-custom', {error: validError})}
            placeholder={translate('preorder.email_placeholder')}
            value={email}
          />
          <button
            disabled={disabledValue}
            className={classNames('btn btn-primary blue btn-preorder button', {'is-focus-input': isFocus, 'is-desibled': disabledValue})}
            type="submit"
          >
            <span className={classNames('button-text open-sans-bold', {isLoading})}>Subscribe</span>
            {isLoading && <div className="spiner-block"><Spiner small white /></div>}
          </button>
          <div>
            {alreadySigned && <div className="error-signed-text text-left">This e-mail is already registered.</div>}
            {serverError && <div className="error-signed-text text-left">Server error.</div>}
            {validError && <div className="error-signed-text text-left">Email is not valid.</div>}
            {didYouMean && <div className="did-you-mean-text text-left">Did you mean <span
              className="did-you-mean-link"
              onClick={this.handleDidYouMeanOnClick.bind(this)}
            >{didYouMean}</span></div>}
          </div>
        </div>
      </form>
    );
  }

}

export default withTranslate(EmailInput);
