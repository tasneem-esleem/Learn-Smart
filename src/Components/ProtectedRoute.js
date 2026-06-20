import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/UserContext'; 

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const token = localStorage.getItem('userToken');

  if (loading) return null; 

  const isAuthenticated = token && token !== 'null' && token !== 'undefined' && token.trim() !== '' && user;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;