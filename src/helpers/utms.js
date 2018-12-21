const utms = (query) => {
  if (query.charAt(0) === '?') {
    query = query.substring(1);
  }

  let parts = query.split('&');
  let result = {};

  parts.map((part) => {
    let [key, value] = part.split('=');

    if (key.substr(0,4) === 'utm_') {
      key = key.substr(4);
      result[key] = value;
    }
  });

  return result;
};

export default utms;
