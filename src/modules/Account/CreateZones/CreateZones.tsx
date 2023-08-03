import { useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { useAuth } from 'hooks/useAuth';
import { SideBar } from 'components';
import { CreateZonesForm } from './components';
import * as Styled from './styled';

const { VITE_GOOGLE_MAPS_API_KEY } = import.meta.env;
export const CreateZones = () => {
  const { hasToken } = useAuth();
  const isAuthenticated = hasToken();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

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
        {isLoaded && <CreateZonesForm />}
      </Styled.FormContainer>
    </Styled.ContentContainer>
  );
};
