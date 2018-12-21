import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-redux-multilingual';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Url from 'url';
import {chain, pick, isEmpty} from 'lodash';

import {unregister} from './registerServiceWorker';

import translations from './translations';
import Intl from 'reducers/intl';
import stq from 'reducers/stq';
import tokens from 'reducers/tokens';
import eths from 'reducers/eths';

import App from './App';
import Event from 'components/Event';
import Auth from 'components/Auth';
import Buy from 'components/Buy';
import Exchange from 'components/Exchange';
import NotFound from 'components/NotFound';

import {started} from 'helpers/constants';
import utms from 'helpers/utms';

let reducers = combineReducers({Intl, stq, tokens, eths});
let store = createStore(reducers);

unregister();

class Router extends Component {
  componentWillMount() {
    if (localStorage.getItem('utm') === null) {
      this.saveUTM();
    }
  }

  getReferrerUrl() {
    const {host} = Url.parse(document.referrer);

    return /(storiqa.com|localhost)/.test(host) ? '(direct)' : host;
  }

  saveUTM() {
    let _utm = utms(location.search);

    _utm = pick(_utm, ['source', 'medium', 'campaign']);

    if (isEmpty(_utm)) {
      const referral = document.referrer ? this.getReferrerUrl() : '(direct)';

      _utm = {
        source: referral,
        medium: 'referral'
      };
    }

    _utm = chain(_utm).toPairs().sortBy(0).fromPairs().value();

    const utmString = Url.format({query: _utm});

    localStorage.setItem('utm', utmString.slice(1));
  }

  render() {
    return (
      <Provider store={store}>
        <IntlProvider translations={translations}>
          <BrowserRouter>
            <div>
              <Switch>
                <Route exact path="/" component={App} />

                {started && <Route path="/auth" component={Auth} />}
                {started && <Route path="/buy" component={Buy} />}
                {/* <Route path="/exchange" component={Exchange} /> */}

                <Route component={NotFound} />
              </Switch>
            </div>
          </BrowserRouter>
        </IntlProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<Router />, document.getElementById('root'));
