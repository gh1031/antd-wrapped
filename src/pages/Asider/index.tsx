
import React, { useState, FC, CSSProperties } from 'react';
import { Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { wait } from '@/src/utils/delay';
import { setToggleLoading } from '@/src/store/actions';
import { component } from '@/src/constant/routes';
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
const style: CSSProperties = {
  fontSize: 24,
  textAlign: 'center',
  borderBottom: '1px solid #ccc',
  boxShadow: '0 4px 4px #ccc',
};

interface IProps {
  menus?: any[];
}

const Asider: FC<IProps> = (props): React.ReactElement => {
  // if use connect API;
  // const { toggleLoading, loading } = props;
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.global);

  const onClick = async (): Promise<any> => {
    dispatch(setToggleLoading({ loading: true }));
    await wait(500)
    dispatch(setToggleLoading({ loading: false }));
  };

  const newMenus = recursionRewriteFields(menus);

  return (
    <Sider collapsed={collapsed} theme="light">
      <section style={style}>
      <MenuOutlined onClick={() => setCollapsed(!collapsed)} />
      </section>
      <WrappedMenu mode="inline" menus={newMenus} onClick={onClick} />
    </Sider>
  );
};

// is use connect API
// function mapStoreStateToProps(state) {
//   return state.global;
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     toggleLoading: (isLoading: boolean) => dispatch({ type: 'loading', payload: { loading: !isLoading} })
//   }
// }
// export default connect(mapStoreStateToProps, mapDispatchToProps)(Asider);
export default Asider;
