import HomeWrapper from '../modules/Home';
import TodoWrapper from '../pages/todo';
import { PATHS } from '../helpers/constants';
import { RouteType } from './types';
import DashboardWrapper from '../modules/Dashboard';

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
    Component: HomeWrapper,
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
