import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';


const { SubMenu, Item } = Menu;
function MyMenu() {
  return (
    <Menu mode="inline">
      <Item><Link to="/react_promise">redux-promise</Link></Item>
      <SubMenu title="submenu">
        <Item><Link to="/example">222</Link></Item>
      </SubMenu>
      <Item><Link to="/router1">router1</Link></Item>
      <Item><Link to="/router2">router2</Link></Item>
    </Menu> 
  )
}

export default MyMenu;