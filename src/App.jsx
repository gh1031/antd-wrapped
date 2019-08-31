import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'src/store';
import Spin from 'src/common/Spin';
import routes from './router';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Suspense fallback={() => Spin}>
          <HashRouter>
            <Switch>{renderRoutes(routes)}</Switch>
          </HashRouter>
        </Suspense>
      </Provider>
    );
  }
}

export default App;
