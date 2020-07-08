import React from 'react';
import { Layout, Button } from 'antd';
import { Link } from 'react-router-dom';
// import styles from './index.less';

const { Header } = Layout;

interface Props {
  className: string;
}

function MyHeader({ className }: Props) {
  return (
    <Header className={className}>
      <Button type="primary" danger>
        <Link to="/login">退出</Link>
      </Button>
    </Header>
  );
}

export default MyHeader;
