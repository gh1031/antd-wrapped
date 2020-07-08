import React from 'react';
import { Redirect } from 'react-router';
import { RouteConfig } from 'react-router-config';
import NoContent from '@/src/pages/NoContent';
import NotFound from '@/src/pages/NotFound';
import Login from '@/src/pages/Login';
import Registry from '@/src/pages/Registry';
import Main from '@/src/pages/Main';


import {
  setting,
  router2,
  reactPromise,
  registry,
  login,
  root,
  component,
  mouse,
  demand,
} from './constant/routes';

// const ReduxPromise = React.lazy(() => import('@/src/pages/ReduxPromise'));
// const Setting = React.lazy(() => import('@/src/pages/Setting'));
// const WrappedUpload = React.lazy(() => import('@/src/pages/Upload'));
const WrappedMenu = React.lazy(() => import(/* webpackChunkName: 'WrappedMenu' */ '@/src/pages/WrappedMenu'));
const RemoteSelect = React.lazy(() => import(/* webpackChunkName: 'RemoteSelect' */ '@/src/pages/RemoteSelect'));
const OperationConfirm = React.lazy(() => import(/* webpackChunkName: 'OperationConfirm' */ '@/src/pages/OperationConfirm'));
const WrappedForm = React.lazy(() => import(/* webpackChunkName: 'WrappedForm' */ '@/src/pages/WrappedForm'));
// const MouseMove = React.lazy(() => import('@/src/pages/Mouse/Move'));
// const AddDemand = React.lazy(() => import('@/src/pages/Demand/Add'));
// const DemandList = React.lazy(() => import('@/src/pages/Demand/List'));

const routes: RouteConfig[] = [
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
      /**
       * 子路由重定向
       */
      {
        path: root,
        exact: true,
        component: () => <Redirect to={component.wrapped_menu} />,
      },
      // {
      //   path: reactPromise,
      //   component: ReduxPromise,
      // },
      // {
      //   path: setting,
      //   component: Setting,
      // },
      {
        path: router2,
        component: NoContent,
      },
      {
        path: component.wrapped_menu,
        component: WrappedMenu,
      },
      // {
      //   path: component.wrapped_upload,
      //   component: WrappedUpload,
      // },
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
      // {
      //   path: mouse.mouse_move,
      //   component: MouseMove,
      // },
      // {
      //   path: demand.demand_add,
      //   component: AddDemand,
      // },
      // {
      //   path: demand.demand_list,
      //   component: DemandList,
      // },
      {
        component: NotFound,
      },
    ],
  },
];

export default routes;
