import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../Context/UserContext';
import api from '../api';

const wakeUpServer = () => {
  fetch('https://educational-platform-backend-935l.onrender.com/api/books', {
    cache: 'no-store',
  }).catch(() => {});
};

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

    wakeUpServer();

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
    <div className="min-h-screen flex items-center justify-center bg-white">
      {error ? (
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#38B793]/20 border-t-[#38B793] rounded-full animate-spin" />
          <p className="text-gray-500 text-sm">Logging in...</p>
        </div>
      )}
    </div>
  );
}
