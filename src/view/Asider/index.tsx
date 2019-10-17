
import React, { useState, FC } from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import delayOperation from '@/src/utils/delay';
import { actions } from '@/src/store/reducer/global';
import {
  component,
} from '@/src/constant/routes';
import { recursionRewriteFields } from '@/components/utils/lang';
import WrappedMenu from '@/components/wrappedMenu';

const menus = [
  {
    title: 'Setting',
    path: '/Setting',
    icon: 'setting',
  },
  {
    title: 'windows',
    path: '/windows',
    icon: 'windows',
  },
  {
    title: 'taobao',
    path: '/taobao',
    icon: 'taobao',
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
      {
        title: 'WrappedForm',
        path: component.wrapped_form,
        icon: 'form',
      },
    ],
  },
  {
    title: '需求管理',
    icon: '',
    children: [{
      title: '新增需求',
      path: '/demands/add',
    }, {
      title: '需求列表',
      path: '/demands/list',
    }],
  },
];

const { Sider } = Layout;
const style = {
  fontSize: 24,
  textAlign: 'center',
  borderBottom: '1px solid #ccc',
  boxShadow: '0 4px 4px #ccc',
};

interface IProps {
  globalLoading: () => void;
}

const Asider: FC<IProps> = (props): React.ReactElement => {
  const [collapsed, setCollapsed] = useState(false);
  // const { menus } = props;
  const toggleMenu = (): void => setCollapsed(!collapsed);

  const onClick = async (): Promise<any> => {
    const { globalLoading } = props;
    await delayOperation(globalLoading, { globalLoading: true });
    delayOperation(globalLoading, { globalLoading: false }, 200);
  };

  const newMenus = recursionRewriteFields(menus);

  return (
    <Sider collapsed={collapsed} theme="light">
      <section style={style}>
        <Icon type="menu" onClick={toggleMenu} />
      </section>
      <WrappedMenu menus={newMenus} onClick={onClick} />
    </Sider>
  );
};

Asider.propTypes = {
  globalLoading: PropTypes.func,
  // menus: PropTypes.array,
};

Asider.defaultProps = {
  globalLoading: () => {},
  // menus: [],
};

export default connect(null, actions.global)(Asider);
