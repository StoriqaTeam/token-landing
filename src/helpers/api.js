import axios from 'axios';

const api = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
    headers: {
      Authorization: token
    }
  });
};

export default api;
