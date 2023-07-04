import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
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
      <Styled.Heading>Kontoinställningar</Styled.Heading>
      <Styled.FormContainer>
        <EditAccountForm />
      </Styled.FormContainer>
    </Styled.ContentContainer>
  );
};
