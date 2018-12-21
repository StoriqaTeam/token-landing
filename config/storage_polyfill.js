import Cookies from 'js-cookie';

try {
  localStorage.setItem('localStorage', 1);
  localStorage.getItem('localStorage');
} catch (e) {
  if (typeof window.localStorage === 'undefined') {
    window.localStorage = {};
  }

  localStorage.getItem = function (key) {
    return Cookies.get(key);
  };

  localStorage.setItem = function (key, value) {
    Cookies.set(key, value, {expires: 365});
  };

  localStorage.removeItem = function (key) {
    Cookies.remove(key);
  };
}
