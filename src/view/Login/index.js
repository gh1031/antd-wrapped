import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Login = () => (
  <div style={{
    display: 'flex',
    height: '100%',
  }}
  >
    <div style={{ margin: 'auto' }}>
      <Button type="primary"><Link to="/registry">注册</Link></Button>
      <Button><Link to="/">Home</Link></Button>
    </div>
  </div>
);

export default Login;
