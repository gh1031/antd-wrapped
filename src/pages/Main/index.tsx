import React, { PureComponent } from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { RouteComponentProps } from 'react-router-dom';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import ErrorBoundary from '@/src/common/ErrorBoundary';
import Asider from '@/src/pages/Asider';
import GlobalLoading from '@/components/Indicator';
import Header from './Header';
import styles from './index.less';

const { Content } = Layout;
interface MainState {
  menus: {}[]
};
class Main extends PureComponent<RouteComponentProps & RouteConfig, MainState> {
  state = {
    menus: [],
  };

  render() {
    const {
      route: { routes },
      loading
    } = this.props;
    const { menus } = this.state;
    return (
      <ErrorBoundary>
        <Layout className={styles.main}>
          <Header className={styles.header} />
          <Layout className={styles.wrapper}>
            <Asider menus={menus} />
            <ErrorBoundary>
              <Content className={styles.content}>{renderRoutes(routes)}</Content>
            </ErrorBoundary>
            <GlobalLoading visible={loading} />
            {/* <Footer>footer</Footer> */}
          </Layout>
        </Layout>
      </ErrorBoundary>
    );
  }
}

function mapStoreStateToProps(state) {
  return state.global;
}
export default connect(mapStoreStateToProps)(Main);
