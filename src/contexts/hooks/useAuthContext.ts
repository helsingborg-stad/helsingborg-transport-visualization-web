import { useState, useEffect } from 'react';
// import { useAuthApi } from 'hooks/useAuthApi';
import { Organisation } from 'types';

export const useAuthContext = () => {
  const [organisation, setOrganisation] = useState<Organisation | null>(null);
  const [loadingOrganisation, setLoadingOrganisation] = useState<boolean>(false);

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
    setLoadingOrganisation(false);
    // }
  }, []);

  const logOut = () => {
    setOrganisation(null);
    clearToken();
  };

  return {
    organisation,
    loadingOrganisation,
    hasToken: () => !!getToken(),
    setOrganisation,
    setToken,
    clearToken,
    logOut,
  };
};
