const request = require('request-promise');

const TOKEN = '6bb8hz9p3dz5s1cyjbkr5k8iuzaf9r7aw9k31m1y';
const UNISENDER_USER = 'am@storiqa.com';
const SENDER_NAME = 'Storiqa';
const SENDER_EMAIL = 'noreply@storiqa.com';

const send = (recipient, subject, body) => {
  const data = {
    'api_key': TOKEN,
    'username': UNISENDER_USER,
    message: {
      recipients: [{email: recipient}],
      'from_email': SENDER_EMAIL,
      'from_name': SENDER_NAME,
      subject,
      body: {
        html: body
      }
    }
  };

  const options = {
    url: 'https://api.unisender.com/ru/transactional/api/v1/email/send.json',
    body: data,
    json: true
  };

  return request(options);
};

exports.send = send;
