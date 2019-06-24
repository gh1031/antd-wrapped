import React, { Fragment } from 'react';
import { WrappedMenu } from '@/lib';
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
    children: [
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
    ],
  },
];
const newMenus = recursionRewriteFields(menus);
const Component = () => (
  <Fragment>
    <div style={{ width: 200, marginBottom: 20 }}>
      <WrappedMenu menus={newMenus} />
    </div>
    <WrappedMenu menus={newMenus} mode="horizontal" />
    <WrappedMenu menus={newMenus} mode="horizontal" theme="dark" />
  </Fragment>
);

export default Component;
