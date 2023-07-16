import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { SideBar } from 'components';
import { CreateZonesForm } from './components';
import * as Styled from './styled';

export const CreateZones = () => {
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
        <Styled.Header>Lägg till zoner</Styled.Header>
        <CreateZonesForm />
      </Styled.FormContainer>
    </Styled.ContentContainer>
  );
};
