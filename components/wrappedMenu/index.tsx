import React, { Fragment } from 'react';
import { Menu, Icon } from 'antd';
import { MenuProps } from 'antd/es/menu';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import PropTypes from 'prop-types';
import { noop } from '../utils/lang';

interface IMenuItem {
  path: string;
  children: IMenuItem[]
}
interface IProps extends MenuProps, RouteComponentProps {
  menus: IMenuItem[];
  renderTitle(menu: IMenuItem): React.ReactElement;
  onClick(): void;
}

const { SubMenu, Item } = Menu;
function WrappedMenu(props: IProps) {
  const {
    menus = [],
    renderTitle,
    mode,
    theme,
    location,
    onClick,
  } = props;
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
      mode={mode}
      theme={theme}
      onClick={onClick}
      defaultOpenKeys={getOpenKeys()}
      selectedKeys={[location.pathname]}
    >
      {renderMenu(menus)}
    </Menu>
  );
}

WrappedMenu.propTypes = {
  mode: PropTypes.string,
  theme: PropTypes.string,
  renderTitle: PropTypes.func,
  onClick: PropTypes.func,
  menus: PropTypes.array.isRequired,
};

WrappedMenu.defaultProps = {
  mode: 'inline',
  theme: 'light',
  renderTitle: menu => (
    <Fragment>
      {menu.icon && <Icon type={menu.icon} style={{ marginRight: 4 }} />}
      <span>{menu.title}</span>
    </Fragment>
  ),
  onClick: noop,
};

export default withRouter(WrappedMenu);
