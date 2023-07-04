import { useState } from 'react';
import { OrganisationDTO } from 'types';

export const useAuthContext = () => {
  const [organisation, setOrganisation] = useState<OrganisationDTO | null>(null);

  const getToken = () => window.sessionStorage.getItem('token') || null;
  const setToken = (token: string) => window.sessionStorage.setItem('token', token);
  const clearToken = () => window.sessionStorage.removeItem('token');

  const getForgotPasswordIdentifier = () => window.localStorage.getItem('forgotPasswordIdentifier') || null;
  const setForgotPasswordIdentifier = (identifier: string) => window.localStorage.setItem('forgotPasswordIdentifier', identifier);
  const clearForgotPasswordIdentifier = () => window.localStorage.removeItem('forgotPasswordIdentifier');

  const logOut = () => {
    setOrganisation(null);
    clearToken();
    clearForgotPasswordIdentifier();
  };

  return {
    organisation,
    hasToken: () => !!getToken(),
    setOrganisation,
    setToken,
    clearToken,
    logOut,
    getForgotPasswordIdentifier,
    setForgotPasswordIdentifier,
    clearForgotPasswordIdentifier,
  };
};
