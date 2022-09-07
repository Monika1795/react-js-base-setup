import Home from '../modules/Home';
import Login from '../modules/Login';
import ToDo from '../modules/ToDoList';
import { PATHS } from '../helpers/constants';
import { RouteType } from './types';
import Dashboard from '../modules/Dashboard';

const ROUTES: Array<RouteType> = [
  {
    name: 'home',
    path: PATHS.home,
    id: 1,
    Component: Home,
    isPrivate: false,
  },
  {
    name: 'login',
    path: PATHS.login,
    id: 2,
    Component: Login,
    isPrivate: false,

  },
  {
    name: 'todo',
    path: PATHS.todo,
    id: 3,
    Component: ToDo,
    isPrivate: false,

  },
  {
    name: 'dashboard',
    path: PATHS.dashboard,
    id: 3,
    Component: Dashboard,
    isPrivate: true,

  },
];

export default ROUTES;
