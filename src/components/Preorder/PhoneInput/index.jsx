import React, {Component} from 'react';
import ReactTelInput from 'react-telephone-input/lib/withStyles';
import axios from 'axios';
import classNames from 'classnames';

import api from 'helpers/api';
import normalize from 'helpers/normalize';
import validate from 'helpers/validate';

import prepareData from 'components/Preorder/prepareData';

import './styles.sass';

class PhoneInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      error: false
    };
  }

  getCountryCode() {
    axios.get('https://freegeoip.net/json/')
      .then(({data: {'country_code': c}}) => {
        if (typeof c === 'string' && c.length === 2) {
          localStorage.setItem('country_code', c.toLowerCase());
          this.setState({country: c});
        } else {
          throw new Error('GEO service response is invalid');
        }
      })
      .catch(() => {
        this.setState({country: 'gb'});
      });
  }

  componentWillMount() {
    const country = localStorage.getItem('country_code');

    if (country) {
      this.setState({country});
    } else {
      this.getCountryCode();
    }
  }

  phoneChange(phone) {
    this.setState({phone});
  }

  phoneSubmit(e) {
    e.preventDefault();

    const phone = normalize('phone', this.state.phone);

    if (validate('phone', phone)) {
      this.setState({error: false});

      api().post('/subscribe', prepareData('phone', phone))
        .then(() => {
          this.props.setPhoneSubmitted(phone);

          dataLayer.push(
            {'event': 'GAEvent', 'eventCategory': 'formico', 'eventAction': 'submit', 'eventLabel': 'sms'}
          );

          fbq('track', 'Lead');
        });
    } else {
      this.setState({error: true});
    }
  }

  render() {
    const {error, country} = this.state;

    return (
      <form onSubmit={this.phoneSubmit.bind(this)}>
        {country &&
          <div className={classNames('phone-input input-group mb-3', {error})}>
            <ReactTelInput
              defaultCountry={this.state.country.toLowerCase()}
              flagsImagePath={require('react-telephone-input/example/src/flags.png')}
              onChange={this.phoneChange.bind(this)}
              />
            <button className="btn btn-primary blue btn-preorder button" type="submit">
              <img src={require('./img/icon-phone.svg')} />
            </button>
          </div>
        }
      </form>
    );
  }

}

export default PhoneInput;
