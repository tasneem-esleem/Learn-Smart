import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../Context/UserContext';

export default function OAuthCallback() {
  const [searchParams] = useSearchParams();
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      localStorage.setItem('userToken', token);
      login(null, token); 
      window.dispatchEvent(new Event('authChange'));
      navigate('/home');
    } else {
      navigate('/login');
    }
  }, []);

  return null;
}