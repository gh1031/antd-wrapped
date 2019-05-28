import React, { PureComponent } from 'react';
import { renderRoutes } from 'react-router-config';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import Asider from 'view/Asider';
import Header from './Header';
import styles from './index.less';

const { Content } = Layout;
class Main extends PureComponent {
  render() {
    const {
      route: { routes },
    } = this.props;
    // console.log(routes, '>>>');
    return (
      <Layout className={styles.main}>
        <Header className={styles.header}>header</Header>
        <Layout className={styles.wrapper}>
          <Asider>sider</Asider>
          <Content className={styles.content}>{renderRoutes(routes)}</Content>
          {/* <Footer>footer</Footer> */}
        </Layout>
      </Layout>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Main;
