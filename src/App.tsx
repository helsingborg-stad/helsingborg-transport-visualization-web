import { Router } from './modules';
import { GlobalStyle } from './theme';
import { AuthContextProvider } from './contexts';
import './App.css';
// eslint-disable-next-line spaced-comment
//testing
export const App = () => (
  <AuthContextProvider>
    <Router />
    <GlobalStyle />
  </AuthContextProvider>
);
