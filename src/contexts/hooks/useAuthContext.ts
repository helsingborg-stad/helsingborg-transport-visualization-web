import { useState } from 'react';
import { OrganisationDTO } from 'types';

const getOrganisation = () => {
  const organisation = window.sessionStorage.getItem('organisation');
  return organisation ? JSON.parse(organisation) : null;
};
export const useAuthContext = () => {
  const [organisation, setOrganisation] = useState<OrganisationDTO | null>(getOrganisation());
  const setOrganisationState = (newOrg: OrganisationDTO) => {
    window.sessionStorage.setItem('organisation', JSON.stringify(newOrg));
    setOrganisation(newOrg);
  };
  const clearOrganisation = () => window.sessionStorage.removeItem('organisation');

  const getToken = () => window.sessionStorage.getItem('token') || null;
  const setToken = (token: string) => window.sessionStorage.setItem('token', token);
  const clearToken = () => window.sessionStorage.removeItem('token');

  const getForgotPasswordIdentifier = () => window.localStorage.getItem('forgotPasswordIdentifier') || null;
  const setForgotPasswordIdentifier = (identifier: string) => window.localStorage.setItem('forgotPasswordIdentifier', identifier);
  const clearForgotPasswordIdentifier = () => window.localStorage.removeItem('forgotPasswordIdentifier');

  const logOut = () => {
    clearOrganisation();
    clearToken();
    clearForgotPasswordIdentifier();
  };

  return {
    hasToken: () => !!getToken(),
    organisation,
    setOrganisation: setOrganisationState,
    setToken,
    clearToken,
    logOut,
    getForgotPasswordIdentifier,
    setForgotPasswordIdentifier,
    clearForgotPasswordIdentifier,
  };
};
