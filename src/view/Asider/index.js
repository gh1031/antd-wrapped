
import React, { useState } from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'react-redux';
import WrappedMenu from '@/components/WrappedMenu';
import { recursionRewriteFields } from '@/components/utils/lang';
// eslint-disable-next-line import/no-unresolved
import delayOperation from 'src/utils/delay';
// eslint-disable-next-line import/no-unresolved
import { actions } from 'src/store/reducer/global';
import PropTypes from 'prop-types';
import {
  component,
  // eslint-disable-next-line import/no-unresolved
} from 'src/constant/routes';

const menus = [
  {
    title: 'install',
    path: '/install',
    icon: 'setting',
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
  {
    title: 'components',
    icon: 'alipay',
    children: [
      {
        title: 'WrappedMenu',
        path: component.wrapped_menu,
        icon: 'menu',
      },
      {
        title: 'RemoteSelect',
        path: component.remote_select,
        icon: 'select',
      },
      {
        title: 'WrappedUpload',
        path: component.wrapped_upload,
        icon: 'upload',
      },
      {
        title: 'OperationConfirm',
        path: component.operation_confirm,
        icon: 'question',
      },
    ],
  },
];

const newMenus = recursionRewriteFields(menus);
const { Sider } = Layout;
const style = {
  fontSize: 24,
  textAlign: 'center',
};

const Asider = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleMenu = () => setCollapsed(!collapsed);
  const onClick = async () => {
    const { globalLoading } = props;
    await delayOperation(globalLoading, { globalLoading: true });
    delayOperation(globalLoading, { globalLoading: false }, 200);
  };
  return (
    <Sider collapsed={collapsed} theme="light">
      <section style={style}>
        <Icon type="switcher" onClick={toggleMenu} />
      </section>
      <WrappedMenu menus={newMenus} onClick={onClick} />
    </Sider>
  );
};

Asider.propTypes = {
  globalLoading: PropTypes.func,
};

Asider.defaultProps = {
  globalLoading: () => {},
};

export default connect(null, actions.global)(Asider);
