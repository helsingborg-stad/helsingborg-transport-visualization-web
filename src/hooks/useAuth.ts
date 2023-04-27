import { useContext } from 'react';
import { AuthContext } from 'contexts/AuthContext';

export const useAuth = () => {
  const {
    user, setUser, loadingUser, hasToken, setToken, logOut,
  } = useContext(AuthContext);

  return {
    logOut,
    user,
    loadingUser,
    hasToken,
    setToken,
    setUser,
  };
};
