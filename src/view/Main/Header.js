import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './index.css';

const { Header } = Layout;

function MyHeader() {
  return (
    <Header>
      <Button type="danger"><Link to="/login">退出</Link></Button>
    </Header>
  );
}

export default MyHeader;
