import React, {
  createContext, Dispatch, SetStateAction,
} from 'react';
import { useAuthContext } from 'contexts/hooks/useAuthContext';
import { Organisation } from 'types';

interface Props {
  children: React.ReactNode;
}

type AuthContextInterface = {
  organisation: Organisation | null;
  setOrganisation: Dispatch<SetStateAction<Organisation | null>>;
  loadingOrganisation: boolean;
  hasToken: () => boolean;
  setToken: (token: string) => void;
  getForgotPasswordIdentifier: () => string | null;
  clearForgotPasswordIdentifier: () => void;
  setForgotPasswordIdentifier: (identifier: string) => void;
  logOut: () => void;
};

export const AuthContext = createContext<AuthContextInterface>({
  organisation: null,
  setOrganisation: () => {},
  getForgotPasswordIdentifier: () => '',
  setForgotPasswordIdentifier: () => {},
  clearForgotPasswordIdentifier: () => {},
  loadingOrganisation: true,
  setToken: () => {},
  hasToken: () => false,
  logOut: () => {},
});

export const AuthContextProvider = ({ children }: Props) => (
  <AuthContext.Provider value={useAuthContext()}>
    {children}
  </AuthContext.Provider>
);
