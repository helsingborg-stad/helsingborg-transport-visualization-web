import { useState, useEffect } from 'react';
// import { useAuthApi } from 'hooks/useAuthApi';
import { User } from 'types';

export const useAuthContext = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState<boolean>(false);

  const getToken = () => window.sessionStorage.getItem('token') || null;
  const setToken = (token: string) => window.sessionStorage.setItem('token', token);
  const clearToken = () => window.sessionStorage.removeItem('token');

  // const { getMe } = useAuthApi();

  useEffect(() => {
    // const token = getToken();
    // console.log(token);
    // if (token) {
    //   getMe()
    //     .then(({ data }) => {
    //       setUser(data);
    //     })
    //     .catch(() => localStorage.removeItem('token'))
    //     .finally(() => setLoadingUser(false));
    // } else {
    setLoadingUser(false);
    // }
  }, []);

  const logOut = () => {
    setUser(null);
    clearToken();
  };

  return {
    user,
    loadingUser,
    hasToken: () => !!getToken(),
    setUser,
    setToken,
    clearToken,
    logOut,
  };
};
