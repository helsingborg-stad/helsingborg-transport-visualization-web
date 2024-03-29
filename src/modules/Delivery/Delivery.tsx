import { useAuth } from 'hooks/useAuth';
import { FC, useEffect } from 'react';
import { DeliveryLayout } from 'layouts/DeliveryLayout';
import { useNavigate } from 'react-router-dom';
import MapIcon from 'assets/map_icon.svg';
import { Button } from 'components/Button';
import * as Styled from './styled';
import { DeliveryList } from './components';

type Props = {
  grouped?: boolean;
};

export const Delivery: FC<Props> = ({ grouped }) => {
  const { hasToken } = useAuth();
  const isAuthenticated = hasToken();
  const navigate = useNavigate();

  const navigateToMap = () => navigate('/map');

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/auth/login';
    }
  }, [isAuthenticated]);

  // TODO: add loading state
  if (!isAuthenticated) {
    return null;
  }

  return (
    <DeliveryLayout>
      <Styled.Container>
        <Styled.Heading>{grouped ? 'Turer' : 'Leveranser'}</Styled.Heading>
        <DeliveryList grouped={grouped} />
      </Styled.Container>
      <Styled.ButtonContainer>
        <Button type="button" primary onClick={navigateToMap}>
          <Styled.ButtonContent>
            <img src={MapIcon} alt="map icon" />
            Visa på karta
          </Styled.ButtonContent>
        </Button>
      </Styled.ButtonContainer>
    </DeliveryLayout>
  );
};

Delivery.defaultProps = {
  grouped: false,
};
