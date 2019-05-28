import ReduxPromise from 'view/ReduxPromise';
import Main from 'view/Main';
import Login from 'view/Login';
import Registry from 'view/Registry';
import NoContent from 'view/NoContent';
import NotFound from 'view/NotFound';
import { router1, router2 } from './view/constant/routes';

const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/registry',
    component: Registry,
    exact: true,
  },
  {
    path: '/',
    component: Main,
    routes: [
      {
        path: '/react_promise',
        component: ReduxPromise,
      },
      {
        path: router1,
        component: NoContent,
      },
      {
        path: router2,
        component: NoContent,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routes;
