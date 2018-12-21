import React, {Component} from 'react';
import {withTranslate} from 'react-redux-multilingual';

import api from 'helpers/api';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mailSent: false,
      email: localStorage.getItem('email') || '',
      code: '',
      error: null
    };
  }

  componentWillMount() {
    const token = localStorage.getItem('token');

    if (token) {
      this.props.history.replace('/buy');
    }
  }

  handleChange({target: {name, value}}) {
    this.setState({[name]: value});
  }

  getUserData() {
    return {
      email: this.state.email,
      utm: localStorage.getItem('utm'),
      lang: localStorage.getItem('locale'),
      country: String(localStorage.getItem('country_code')).toLowerCase()
    };
  }

  unsetError() {
    this.setState({error: null});
  }

  setError(error = null) {
    const {translate} = this.props;

    error = error ? translate(error) : null;

    this.setState({error});
  }

  sendEmail(e) {
    e.preventDefault();

    this.unsetError();

    localStorage.setItem('email', this.state.email);

    api().post('/auth', this.getUserData())
      .then(() => {
        this.setState({mailSent: true});
      })
      .catch(({response}) => {
        switch (response.status) {
          case 403:
            this.setError('auth.errors.unsubscribed');

            break;

          case 422:
            this.setError('auth.errors.wrong_email');

            break;

          default:
            this.setError('auth.errors.unknown');
        }
      });
  }

  verifyToken(e) {
    e.preventDefault();

    const {code, email} = this.state;

    this.unsetError();

    if (code.length === 0) {
      this.setError('auth.errors.empty_code');

      return;
    }

    api().post('/auth/verify', {code, email})
      .then(({data}) => {
        localStorage.setItem('token', data);

        this.props.history.replace('/buy');
      })
      .catch(({response}) => {
        switch (response.status) {
          case 422:
            this.setError('auth.errors.wrong_code');

            break;

          default:
            this.setError('auth.errors.unknown');
        }
      });
  }

  render() {
    const {mailSent, email, code, error} = this.state;
    const {translate} = this.props;

    return (
      <div className="buy" style={{minHeight: '100vh'}}>
        <section className="container text-white text-center pt-5 pb-5" style={{maxWidth: '460px'}}>
          <h1>Sign in</h1>

          {mailSent ? (
            <form onSubmit={this.verifyToken.bind(this)}>
              <div className="form-group d-flex flex-column align-items-center">
                <label>Check your e-mail, copy and paste code here</label>
                <input type="text" name="code" value={code} className="form-control"
                       onChange={this.handleChange.bind(this)} placeholder={translate('auth.verification_code')} />
                <label>You admit you are at legal age in your country and submit that laws of your country do not
                  prohibit your contribution in ICO</label>
              </div>

              {error &&
                <div className="text-danger pb-3">{error}</div>
              }

              <button type="submit" className="btn btn-primary">{translate('auth.login')}</button>
            </form>
          ) : (
            <form onSubmit={this.sendEmail.bind(this)}>
              <div className="form-group d-flex flex-column align-items-center">
                <label>
                  Enter your email.<br />
                  We'll send you a temporary confirmation token.
                </label>
                <input type="text" name="email" value={email} className="form-control"
                       onChange={this.handleChange.bind(this)} placeholder={translate('auth.email')} />
              </div>

              {error &&
                <div className="text-danger pb-3">{error}</div>
              }

              <button type="submit" className="btn btn-primary">{translate('auth.send_email')}</button>
            </form>
          )}
        </section>
      </div>
    );
  }
}

export default withTranslate(Auth);
