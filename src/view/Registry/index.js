import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Registry = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Button style={{ margin: 'auto' }} type="primary"><Link to="/login">登陆</Link></Button>
  </div>
);

export default Registry;
