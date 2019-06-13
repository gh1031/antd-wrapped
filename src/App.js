import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import store from 'src/store';
// import { WrappedMenu } from 'antd-wrapped';
import routes from './router';

// console.log(WrappedMenu);
class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>{renderRoutes(routes)}</Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
