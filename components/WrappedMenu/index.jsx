import React, { Fragment } from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import commonStyle from '@/components/common.less';
import { noop } from '@/components/utils/lang';

const { SubMenu, Item } = Menu;
function WrappedMenu(props) {
  const {
    menus = [],
    renderTitle,
    ...rest
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
    const { location: { pathname } } = rest;
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
      mode={rest.mode}
      theme={rest.theme}
      onClick={rest.onClick}
      defaultOpenKeys={getOpenKeys()}
      selectedKeys={[rest.location.pathname]}
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
      {menu.icon && <Icon type={menu.icon} className={commonStyle.mr8} />}
      <span>{menu.title}</span>
    </Fragment>
  ),
  onClick: noop,
};

export default withRouter(WrappedMenu);
