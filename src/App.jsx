import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
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
            {renderRoutes(routes)}
          </HashRouter>
        </Suspense>
      </Provider>
    );
  }
}

export default App;
