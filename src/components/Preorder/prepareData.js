import utms from 'helpers/utms';
import {getLocale} from 'helpers/locale';

const prepareData = (type, contact) => ({
  type,
  contact,
  utm: utms(location.search),
  lang: getLocale(),
  country: localStorage.getItem('country')
});

export default prepareData;
