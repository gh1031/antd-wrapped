import React, { PureComponent } from 'react';
import { renderRoutes } from 'react-router-config';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorBoundary from '@/src/common/ErrorBoundary';
import { fetchMenus } from '@/src/api/users';
import Asider from '@/src/view/Asider';
import GlobalLoading from '@/components/Indicator';

import Header from './Header';
import styles from './index.less';

const { Content } = Layout;
class Main extends PureComponent {
  state = {
    menus: [],
  };

  async componentDidMount() {
    const res = await fetchMenus();
    const { list } = res;
    this.setState({ menus: list });
  }

  render() {
    const {
      route: { routes },
      globalLoading,
    } = this.props;
    const { menus } = this.state;
    return (
      <ErrorBoundary>
        <Layout className={styles.main}>
          <Header className={styles.header}>header</Header>
          <Layout className={styles.wrapper}>
            <Asider menus={menus} />
            <ErrorBoundary>
              <Content className={styles.content}>{renderRoutes(routes)}</Content>
            </ErrorBoundary>
            <GlobalLoading visible={globalLoading} />
            {/* <Footer>footer</Footer> */}
          </Layout>
        </Layout>
      </ErrorBoundary>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object.isRequired,
  globalLoading: PropTypes.bool,
};

Main.defaultProps = {
  globalLoading: false,
};

export default connect(({ global: { globalLoading } }) => ({ globalLoading }))(Main);
