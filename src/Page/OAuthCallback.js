import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../Context/UserContext';
import api from '../api';

export default function OAuthCallback() {
  const [searchParams] = useSearchParams();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');

    if (!token) {

      navigate('/login?error=google_auth_failed');
      return;
    }

    localStorage.setItem('userToken', token);

    const fetchUser = async () => {
      try {
        const user = await api.get('/auth/me');

        localStorage.setItem('user', JSON.stringify(user));
        login(user, token);
        window.dispatchEvent(new Event('authChange'));
        navigate('/home');
      } catch (err) {
        console.error('OAuth callback error:', err);
        localStorage.removeItem('userToken');
        localStorage.removeItem('user');
        setError(err.message || 'حدث خطأ أثناء تسجيل الدخول عبر جوجل');

        setTimeout(() => navigate('/login?error=google_auth_failed'), 1500);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {error ? (
        <p className="text-red-500 text-sm">{error}</p>
      ) : (
        <p className="text-gray-500 text-sm">جاري تسجيل الدخول...</p>
      )}
    </div>
  );
}
