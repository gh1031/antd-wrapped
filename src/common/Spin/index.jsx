import React from 'react';
import { Spinner } from 'spin.js';

const Spin = () => {
  const renderSpin = () => {
    const target = document.getElementById('app');
    new Spinner({ color: '#fff', lines: 12 }).spin(target);
  };
  return renderSpin();
};

export default Spin;
