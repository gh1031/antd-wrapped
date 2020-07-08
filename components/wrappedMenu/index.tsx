import React, { Fragment, FC } from 'react';
import { Menu } from 'antd';
import { MenuProps } from 'antd/es/menu';
import { Link, useHistory, RouteComponentProps } from 'react-router-dom';
import PropTypes from 'prop-types';
import { noop } from '../utils/lang';

export interface IMenuItem {
  icon: string;
  title: string;
  path: string;
  children: IMenuItem[]
}

export interface IProps extends MenuProps {
  menus: IMenuItem[];
  renderTitle?: (menu: IMenuItem) => React.ReactNode;
  onClick?: () => void;
}

const { SubMenu, Item } = Menu;
const defaultRenderTitle =  menu => <span>{menu.title}</span>;
const WrappedMenu: FC<IProps> = (props: IProps) => {
  const {
    menus = [],
    renderTitle = defaultRenderTitle,
    onClick = noop,
    ...restProps
  } = props;
  const { location } = useHistory();
  /**
   *
   * @param {Array} menus
   * @description 渲染菜单项
   */
  const renderMenu = menus => menus.map((menu) => {
    if (menu.children) {
      return (
        <SubMenu title={renderTitle(menu)} key={menu.path}>
          {renderMenu(menu.children)}
        </SubMenu>
      );
    }
    return (<Item key={menu.path}><Link to={menu.path}>{renderTitle(menu)}</Link></Item>);
  });

  /**
   * @description 获取当前打开的菜单
   */
  const getOpenKeys = () => {
    const { pathname } = location;
    const matched = [];
    menus.forEach(menu => {
      if (menu.path === pathname) {
        matched.push(pathname);
      }
      if (menu.children) {
        menu.children.forEach(subMenu => {
          if (subMenu.path === pathname) {
            matched.push(menu.path);
          }
        });
      }
    });
    return matched;
  };

  return (
    <Menu
      onClick={onClick}
      defaultOpenKeys={getOpenKeys()}
      selectedKeys={[location.pathname]}
      {...restProps}
    >
      {renderMenu(menus)}
    </Menu>
  );
};

export default WrappedMenu;
