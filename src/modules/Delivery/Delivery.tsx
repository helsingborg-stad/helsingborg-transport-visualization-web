import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import * as Styled from './styled';
import { DeliveryList } from './components';

export const Delivery = () => {
  const { hasToken } = useAuth();
  const isAuthenticated = hasToken();

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
    <Styled.Container>
      <Styled.Heading>Leveranser</Styled.Heading>
      <DeliveryList />
    </Styled.Container>
  );
};
