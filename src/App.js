import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './router';
import store from 'view/store';

class App extends React.PureComponent {

  render() {
    console.log(routes)
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

export default App;