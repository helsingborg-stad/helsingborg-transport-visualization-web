import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';

export const Landing = () => {
  const { hasToken } = useAuth();
  const isAuthenticated = hasToken();

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/auth/login';
    }
  }, [isAuthenticated]);

  // TODO: add loading state
  if (!isAuthenticated) {
    return null;
  }

  return (<h1>VNTRS + Vite = ❤️</h1>
  );
};
