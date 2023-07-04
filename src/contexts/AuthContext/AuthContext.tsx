import React, {
  createContext,
} from 'react';
import { useAuthContext } from 'contexts/hooks/useAuthContext';
import { OrganisationDTO } from 'types';

interface Props {
  children: React.ReactNode;
}

type AuthContextInterface = {
  get organisation(): OrganisationDTO | null;
  setOrganisation: (organisation: OrganisationDTO) => void;
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
  setToken: () => {},
  hasToken: () => false,
  logOut: () => {},
});

export const AuthContextProvider = ({ children }: Props) => (
  <AuthContext.Provider value={useAuthContext()}>
    {children}
  </AuthContext.Provider>
);
