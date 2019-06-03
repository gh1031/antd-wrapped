
import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import AntdMenu from '@/components/AntdMenu';
import { recursionRewriteFields } from '@/components/utils/lang';

const menus = [
  {
    title: 'router1',
    path: '/router1',
  },
  {
    title: 'router2',
    path: '/router2',
  },
  {
    title: 'router3',
    path: '/router3',
  },
  {
    title: 'router4',
    children: [
      {
        title: 'router4/1',
        path: '/router4',
        icon: 'setting',
      },
      {
        title: 'router4/2',
        path: '/router5',
      },
      {
        title: 'router4/3',
        path: '/router6',
      },
    ],
  },
];

const newMenus = recursionRewriteFields(menus);
const { Sider } = Layout;

const Asider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleMenu = () => setCollapsed(!collapsed);
  return (
    <Sider>
      <Button onClick={toggleMenu}>button</Button>
      <AntdMenu theme="dark" menus={newMenus} collapsed={collapsed} />
    </Sider>
  );
};


export default Asider;
