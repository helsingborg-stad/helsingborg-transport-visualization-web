import React, {
  createContext, Dispatch, SetStateAction,
} from 'react';
import { useAuthContext } from 'contexts/hooks/useAuthContext';
import { User } from 'types';

interface Props {
  children: React.ReactNode;
}

type AuthContextInterface = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  loadingUser: boolean;
  hasToken: () => boolean;
  setToken: (token: string) => void;
  logOut: () => void;
};

export const AuthContext = createContext<AuthContextInterface>({
  user: null,
  setUser: () => {},
  loadingUser: true,
  setToken: () => {},
  hasToken: () => false,
  logOut: () => {},
});

export const AuthContextProvider = ({ children }: Props) => (
  <AuthContext.Provider value={useAuthContext()}>
    {children}
  </AuthContext.Provider>
);
