import { useContext } from 'react';
import { AuthContext } from 'contexts/AuthContext';

export const useAuth = () => {
  const {
    organisation,
    setOrganisation,
    loadingOrganisation,
    hasToken,
    setToken,
    logOut,
    getForgotPasswordIdentifier,
    setForgotPasswordIdentifier,
    clearForgotPasswordIdentifier,
  } = useContext(AuthContext);

  return {
    logOut,
    organisation,
    loadingOrganisation,
    hasToken,
    setToken,
    setOrganisation,
    getForgotPasswordIdentifier,
    setForgotPasswordIdentifier,
    clearForgotPasswordIdentifier,
  };
};
