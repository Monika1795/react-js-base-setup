import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../utils';

function PrivateRoutes() {
  const session = getToken();
  return session ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoutes;
