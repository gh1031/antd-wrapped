import React, { PureComponent } from 'react';
import { renderRoutes } from 'react-router-config';
import { Layout } from 'antd';
import Asider from 'view/Asider';
import Header from './Header';

import './index.css';

const { Content } = Layout;
class MyComponent extends PureComponent {
  render() {
    const { route: { routes } } = this.props;
    console.log(routes, '>>>')
    return (
      <Layout className='main'>
        <Header className='header'>header</Header>
        <Layout className='wrapper'>
          <Asider>sider</Asider>
          <Content>
            {
              renderRoutes(routes)
            }
          </Content>
          {/* <Footer>footer</Footer> */}
        </Layout>
      </Layout>
    );
  }
}

export default MyComponent;
