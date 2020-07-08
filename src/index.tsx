import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './utils/axios';
import './index.less';


if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept();
}

ReactDom.render(<App />, document.getElementById('app'));
