import axios from 'axios';
import { message } from 'antd';

const { log } = console;

function handleRequestSuccess(config) {
  return config;
}

function handleRequestError(error) {
  message.error(error, 'error');
  return Promise.reject(error);
}


axios.interceptors.request.use(
  handleRequestSuccess,
  handleRequestError,
);

function handleResponseSuccess(response) {
  const { data, config } = response;
  if (config.skip) return response;
  if (!data.success) {
    message.error(data.errorMsg);
    return Promise.reject(data.errorMsg);
  }
  return data.data;
}

function handleResponseError(error) {
  const { status } = error.response;
  if (/^5\d\d$/.test(status)) {
    message.error('接口挂了！');
  } else if (status === 404) {
    message.error('找不到接口！');
  } else {
    message.error('系统开小差');
  }
  log('[error response]: ', error.response);
  return Promise.reject(error);
}

axios.interceptors.response.use(
  handleResponseSuccess,
  handleResponseError,
);

export default axios;
