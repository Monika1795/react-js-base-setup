import Home from '../modules/Home';
import Login from '../modules/Login';
import ToDo from '../modules/ToDoList';
import { RouteType } from './types';
import { PATHS } from '../helpers/constants';

const ROUTES: Array<RouteType> = [
  {
    name: 'home',
    path: PATHS.home,
    id: 1,
    Component: Home,
    isPrivate: true,
  },
  {
    name: 'login',
    path: PATHS.login,
    id: 2,
    Component: Login,
  },
  {
    name: 'todo',
    path: PATHS.todo,
    id: 3,
    Component: ToDo,
  },
];

export default ROUTES;
