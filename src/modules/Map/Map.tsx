import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { DeliveryLayout } from 'layouts/DeliveryLayout';
import { Button } from 'components/Button';
import ListIcon from 'assets/list_icon.svg';
import { Map as MapComponent } from './components';
import * as Styled from './styled';

export const Map = () => {
  const { hasToken } = useAuth();
  const isAuthenticated = hasToken();
  const navigate = useNavigate();

  const navigateToList = () => navigate('/');

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/auth/login';
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <DeliveryLayout>
      <Styled.ContentContainer>
        <Styled.Container>
          <Styled.Heading>Platser</Styled.Heading>
        </Styled.Container>
        <MapComponent />
        <Styled.ButtonContainer>
          <Button type="button" outline onClick={navigateToList}>
            <Styled.ButtonContent>
              <img src={ListIcon} alt="list icon" />
              Visa Lista
            </Styled.ButtonContent>
          </Button>
        </Styled.ButtonContainer>
      </Styled.ContentContainer>
    </DeliveryLayout>
  );
};
