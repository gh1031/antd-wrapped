import React from 'react';
import WrappedMenu from '@/components/WrappedMenu';
import { Layout } from 'antd';
import { recursionRewriteFields } from '@/components/utils/lang';

const menus = [
  {
    title: 'apple',
    path: '/apple',
    icon: 'apple',
  },
  {
    title: 'windows',
    path: '/windows',
    icon: 'windows',
  },
  {
    title: 'taobao',
    path: '/taobeo',
    icon: 'taobao',
  },
  {
    title: 'upload',
    path: '/upload',
    icon: 'upload',
  },
];
const newMenus = recursionRewriteFields(menus);
const { Sider } = Layout;
const Component = () => <Sider><WrappedMenu menus={newMenus} /></Sider>;

export default Component;
