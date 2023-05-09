import { useContext } from 'react';
import { AuthContext } from 'contexts/AuthContext';

export const useAuth = () => {
  const {
    organisation,
    setOrganisation,
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
    hasToken,
    setToken,
    setOrganisation,
    getForgotPasswordIdentifier,
    setForgotPasswordIdentifier,
    clearForgotPasswordIdentifier,
  };
};
