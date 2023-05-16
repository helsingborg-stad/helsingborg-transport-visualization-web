import React from 'react';
import { useGetMap } from 'modules/Map/hooks';
import { Button } from 'components/Button';
import * as Styled from './styled';

export const Map: React.FC = () => {
  const { mapRef, error } = useGetMap();

  if (error) {
    return (
      <Styled.ErrorContainer>
        <Styled.ErrorText>
          Sam kan inte visas för tillfället
        </Styled.ErrorText>
        <Styled.ErrorButtonContainer>
          <Button primary type="button" onClick={() => window.location.reload()}>Försök igen</Button>
        </Styled.ErrorButtonContainer>
      </Styled.ErrorContainer>
    );
  }
  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};
