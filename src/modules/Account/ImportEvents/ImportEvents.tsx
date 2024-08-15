import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { SideBar } from 'components';
import { ImportEventsForm } from './components';
import * as Styled from './styled';

export const ImportEvents = () => {
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
        <Styled.Header>Importera data</Styled.Header>
        <ImportEventsForm />
      </Styled.FormContainer>
    </Styled.ContentContainer>
  );
};
