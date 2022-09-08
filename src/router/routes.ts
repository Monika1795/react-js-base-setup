import React from 'react';
import { PATHS } from '../helpers/constants';
import { RouteType } from './types';

// Instead of regular import statements, we will use the above approach for lazy loading
const LoginWrapper = React.lazy(() => import('../pages/login'));
const TodoWrapper = React.lazy(() => import('../pages/todo'));
const DashboardWrapper = React.lazy(() => import('../pages/dashboard'));

const ROUTES: Array<RouteType> = [
  {
    name: 'todo',
    path: PATHS.todo,
    id: 1,
    Component: TodoWrapper,
    isPrivate: false,

  },
  {
    name: 'login',
    path: PATHS.login,
    id: 2,
    Component: LoginWrapper,
    isPrivate: false,

  },

  {
    name: 'dashboard',
    path: PATHS.dashboard,
    id: 3,
    Component: DashboardWrapper,
    isPrivate: true,

  },
];

export default ROUTES;
