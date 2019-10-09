import React from 'react';
import { Redirect } from 'react-router';
import NoContent from '@/src/view/NoContent';
import NotFound from '@/src/view/NotFound';
import Login from '@/src/view/Login';
import Registry from '@/src/view/Registry';
import Main from '@/src/view/Main';


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

const ReduxPromise = React.lazy(() => import('@/src/view/ReduxPromise'));
const Setting = React.lazy(() => import('@/src/view/Setting'));
const WrappedUpload = React.lazy(() => import('@/src/view/Upload'));
const WrappedMenu = React.lazy(() => import('@/src/view/WrappedMenu'));
const RemoteSelect = React.lazy(() => import('@/src/view/RemoteSelect'));
const OperationConfirm = React.lazy(() => import('@/src/view/OperationConfirm'));
const WrappedForm = React.lazy(() => import('@/src/view/WrappedForm'));
const MouseMove = React.lazy(() => import('@/src/view/Mouse/Move'));
const AddDemand = React.lazy(() => import('@/src/view/Demand/Add'));
const DemandList = React.lazy(() => import('@/src/view/Demand/List'));

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
      /**
       * 子路由重定向
       */
      {
        path: root,
        exact: true,
        component: () => <Redirect to={component.wrapped_menu} />,
      },
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
        path: mouse.mouse_move,
        component: MouseMove,
      },
      {
        path: demand.demand_add,
        component: AddDemand,
      },
      {
        path: demand.demand_list,
        component: DemandList,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routes;
console.log(1);
