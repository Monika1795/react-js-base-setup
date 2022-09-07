import './App.css';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ROUTES from './router';
import { RouteType } from './router/types';
import PrivateRoute from './router/privateRoute';

import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {ROUTES.map(({
            path, id, Component, isPrivate,
          }: RouteType) => {
            if (isPrivate) {
              return (
                <PrivateRoute>
                  <Route key={id} path={path} element={<Component />} />
                </PrivateRoute>
              );
            }
              <Route key={id} path={path} element={<Component />} />;
          })}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
