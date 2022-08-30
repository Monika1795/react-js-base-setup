import Home from "../pages/Home";
import Login from "../pages/Login";
import { RouteType } from "./types";

export const PATHS : any = {
  home : "/",
  login : "/login",
}

export const ROUTES: Array<RouteType> = [
  {
    name : "home",
    path: PATHS.home,
    id: 1,
    Component: Home
  },
  {
    name : "login",
    path: PATHS.login,
    id: 1,
    Component: Login,
  },
];
