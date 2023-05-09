import React, {
  createContext, Dispatch, SetStateAction,
} from 'react';
import { useAuthContext } from 'contexts/hooks/useAuthContext';
import { OrganisationDTO } from 'types';

interface Props {
  children: React.ReactNode;
}

type AuthContextInterface = {
  organisation: OrganisationDTO | null;
  setOrganisation: Dispatch<SetStateAction<OrganisationDTO | null>>;
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
