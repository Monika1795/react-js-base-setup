import { PATHS } from '../helpers/constants';
import { RouteType } from './types';

import LoginWrapper from '../pages/login';
import TodoWrapper from '../pages/todo';
import DashboardWrapper from '../pages/dashboard';

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
