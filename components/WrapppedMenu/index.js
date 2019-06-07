import React, { Fragment } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import commonStyle from '@/components/common.less';

const { SubMenu, Item } = Menu;
function WrappedMenu(props) {
  const {
    menus = [],
    renderTitle,
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
    return (<Item key={menu.key}><Link to={menu.path}>{renderTitle(menu)}</Link></Item>);
  });

  return (
    <Menu
      {...data}
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
  onClick: () => {},
};

export default WrappedMenu;
