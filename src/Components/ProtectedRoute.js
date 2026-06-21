import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/UserContext';

const ProtectedRoute = ({ children }) => {
  const { loading } = useAuth();
  const token = localStorage.getItem('userToken');

  if (loading) return null;

  const hasValidToken =
    token && token !== 'null' && token !== 'undefined' && token.trim() !== '';

  if (!hasValidToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
