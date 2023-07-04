import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { SideBar } from 'components';
import { EditAccountForm } from './components';
import * as Styled from './styled';

export const AccountSettings = () => {
  const { hasToken } = useAuth();
  const isAuthenticated = hasToken();

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/auth/login';
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Styled.ContentContainer>
      <SideBar />
      <Styled.FormContainer>
        <Styled.Header>Konto</Styled.Header>
        <EditAccountForm />
      </Styled.FormContainer>
    </Styled.ContentContainer>
  );
};
