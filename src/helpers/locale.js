const getLocale = () => localStorage.getItem('locale');
const setLocale = (locale) => {
  let search = window.location.search;
  const lang = search.match(/lang=([^&]*)/);
  if (lang) {
    search = search.replace(`lang=${lang[1]}`, `lang=${locale}`);
    window.history.replaceState(null, null, search);
  }
  localStorage.setItem('locale', locale);
};

export {
  getLocale,
  setLocale
};
