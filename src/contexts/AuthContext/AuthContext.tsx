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
  logOut: () => void;
};

export const AuthContext = createContext<AuthContextInterface>({
  organisation: null,
  setOrganisation: () => {},
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
