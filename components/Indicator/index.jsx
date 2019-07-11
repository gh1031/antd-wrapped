import React from 'react';
import ReactDom from 'react-dom';
import { Spin } from 'antd';
import styles from './index.less';

const GlobalLoading = ({ visible }) => {
  if (!visible) return null;
  return ReactDom.createPortal(
    <section className={styles.layout}>
      <Spin className={styles.auto} size="large" tip="loading....." />
    </section>,
    document.body,
  );
};

export default GlobalLoading;
