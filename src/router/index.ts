import Home from '../pages/Home';
import Login from '../pages/Login';
import ToDo from '../pages/ToDoList';
import { RouteType } from './types';

export const PATHS : any = {
  home: '/',
  login: '/login',
  todo: '/todo',
};

export const ROUTES: Array<RouteType> = [
  {
    name: 'home',
    path: PATHS.home,
    id: 1,
    Component: Home,
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
