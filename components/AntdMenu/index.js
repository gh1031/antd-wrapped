import React, { useState } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import commonStyle from '@/components/common.less';


const { SubMenu, Item } = Menu;
function AntdMenu(props) {
  const {
    menus = [],
    renderTitle,
    collapsed,
    ...data
  } = props;
  const renderMenu = menus => menus.map((menu) => {
    if (menu.children) {
      return (
        <SubMenu title={renderTitle(menu)} key={menu.key}>
          {renderMenu(menu.children)}
        </SubMenu>
      );
    }
    return <Item>{renderTitle(menu)}</Item>;
  });

  return (
    <Menu
      {...data}
      inlineCollapsed={collapsed}
    >
      {renderMenu(menus)}
    </Menu>
  );
}

AntdMenu.propTypes = {
  mode: PropTypes.string,
  theme: PropTypes.string,
  renderTitle: PropTypes.func,
  onClick: PropTypes.func,
  collapsed: PropTypes.bool,
  menus: PropTypes.array.isRequired,
};

AntdMenu.defaultProps = {
  mode: 'inline',
  theme: 'light',
  collapsed: true,
  renderTitle: menu => (
    <span to={menu.path}>
      {menu.icon && <Icon type={menu.icon} className={commonStyle.mr8} />}
      <span>{menu.title}</span>
    </span>
  ),
  onClick: () => {},
};

export default AntdMenu;
