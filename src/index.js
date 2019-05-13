import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';

const a = 1;
console.log(process.env.NODE_ENV);
if (module.hot) {
  module.hot.accept();
}
ReactDom.render(<App />, document.getElementById('app'));

const { location } = window.location;
console.log(location);
