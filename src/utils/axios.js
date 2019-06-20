import axios from 'axios';
import { message } from 'antd';

function handleRequestSuccess(config) {
  return config;
}

function handleRequestError(error) {
  message.error(error);
  return Promise.reject(error);
}


axios.interceptors.request.use(
  handleRequestSuccess,
  handleRequestError,
);

function handleResponseSuccess(response) {
  const { data } = response;
  if (data.success) {
    message.success(data.message);
  } else {
    message.error(data.message);
    throw Error(data.message);
  }
  return response;
}

function handleResponseError(error) {
  message.error(error);
  return Promise.reject(error);
}

axios.interceptors.response.use(
  handleResponseSuccess,
  handleResponseError,
);

export default axios;
