import { Navigate } from 'react-router-dom';
import { getAccessToken } from '../utils/storage';

function PrivateRoute({ children }:any) {
  const auth = getAccessToken();
  return auth ? children : <Navigate to="/" />;
}

export default PrivateRoute;
