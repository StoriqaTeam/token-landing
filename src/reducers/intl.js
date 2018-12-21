import find from 'lodash/find';

import {setLocale, getLocale} from 'helpers/locale';
import {defaultLang} from 'helpers/lang';

let localLocale = window.navigator ? (window.navigator.language ||
                    window.navigator.systemLanguage ||
                    window.navigator.userLanguage) : defaultLang;

localLocale = localLocale.substr(0, 2).toLowerCase();

setLocale(localLocale);

// const locale = getLocale('locale') || defaultLang;
const locale = defaultLang;
const initialState = {locale};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOCALE':
      return {
        ...state,
        locale: action.locale
      };

    default:
      return state;
  }
};
