import { Router } from './modules';
import { GlobalStyle } from './theme';
import { AuthContextProvider } from './contexts';
import './App.css';

export const App = () => (
  <AuthContextProvider>
    <Router />
    <GlobalStyle />
  </AuthContextProvider>
);
