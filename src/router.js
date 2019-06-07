import ReduxPromise from 'view/ReduxPromise';
import Main from 'view/Main';
import Login from 'view/Login';
import Registry from 'view/Registry';
import NoContent from 'view/NoContent';
import NotFound from 'view/NotFound';
import Install from 'view/Install';

import WrappedUpload from 'view/Upload';
import WrappedMenu from 'view/WrappedMenu';
import RemoteSelect from 'view/RemoteSelect';
import OperationConfirm from 'view/OperationConfirm';


import {
  install,
  router2,
  reactPromise,
  registry,
  login,
  root,
  component,
} from './constant/routes';

const routes = [
  {
    path: login,
    component: Login,
    exact: true,
  },
  {
    path: registry,
    component: Registry,
    exact: true,
  },
  {
    path: root,
    component: Main,
    routes: [
      {
        path: reactPromise,
        component: ReduxPromise,
      },
      {
        path: install,
        component: Install,
      },
      {
        path: router2,
        component: NoContent,
      },
      {
        path: component.wrapped_menu,
        component: WrappedMenu,
      },
      {
        path: component.wrapped_upload,
        component: WrappedUpload,
      },
      {
        path: component.remote_select,
        component: RemoteSelect,
      },
      {
        path: component.operation_confirm,
        component: OperationConfirm,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routes;
