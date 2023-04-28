import { useApp } from '../context/AppContext';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const {
    state: { user, selectedLanguage },
  } = useApp();

  return user && selectedLanguage ? <Outlet /> : <Navigate to='/details' />;
};

export default PrivateRoute;
