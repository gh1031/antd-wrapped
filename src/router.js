import React from 'react';
import NoContent from 'view/NoContent';
import NotFound from 'view/NotFound';
import Login from 'view/Login';
import Registry from 'view/Registry';
import Main from 'view/Main';


import {
  setting,
  router2,
  reactPromise,
  registry,
  login,
  root,
  component,
} from './constant/routes';

const ReduxPromise = React.lazy(() => import('view/ReduxPromise'));
const Setting = React.lazy(() => import('view/Setting'));
const WrappedUpload = React.lazy(() => import('view/Upload'));
const WrappedMenu = React.lazy(() => import('view/WrappedMenu'));
const RemoteSelect = React.lazy(() => import('view/RemoteSelect'));
const OperationConfirm = React.lazy(() => import('view/OperationConfirm'));
const WrappedForm = React.lazy(() => import('view/WrappedForm'));

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
        path: setting,
        component: Setting,
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
        path: component.wrapped_form,
        component: WrappedForm,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routes;
