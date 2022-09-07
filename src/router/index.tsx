import { Route, Routes } from 'react-router-dom';
import { RouteType } from './types';
import PrivateRoute from './privateRoute';
import ROUTES from './routes';

function RoutesWrapper() {
  return (
    <Routes>
      {ROUTES.map(({
        path, id, Component, isPrivate,
      }: RouteType) => {
        if (isPrivate) {
          return (
            <Route
              key={id}
              path={path}
              element={(
                <PrivateRoute>
                  <Component />
                  {' '}
                </PrivateRoute>
)}
            />

          );
        }
        return <Route key={id} path={path} element={<Component />} />;
      })}
    </Routes>
  );
}

export default RoutesWrapper;
