import { Router } from './modules';
import { AuthContextProvider } from './contexts';
import './App.css';

export const App = () => (
  <AuthContextProvider>
    <Router />
  </AuthContextProvider>
);
