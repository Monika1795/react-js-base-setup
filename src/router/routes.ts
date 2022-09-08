import HomeWrapper from '../modules/Home';
import LoginWrapper from '../modules/Login';
import TodoWrapper from '../pages/todo';
import { PATHS } from '../helpers/constants';
import { RouteType } from './types';
import DashboardWrapper from '../modules/Dashboard';

const ROUTES: Array<RouteType> = [
  {
    name: 'home',
    path: PATHS.home,
    id: 1,
    Component: HomeWrapper,
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
    name: 'todo',
    path: PATHS.todo,
    id: 3,
    Component: TodoWrapper,
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
