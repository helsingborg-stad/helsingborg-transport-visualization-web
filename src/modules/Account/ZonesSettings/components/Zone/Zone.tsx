import { FC } from 'react';
import { Button } from 'components';
import { useNavigate } from 'react-router-dom';
import { Feature } from 'types/zone';
import * as Styled from './styled';

type InputProps = {
  zone: Feature['properties'];
  deleteZone: () => void;
  isLoading: boolean;
};

export const Zone: FC<InputProps> = ({
  deleteZone, isLoading, zone,
}) => {
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <Styled.SplitContainer>
        <Styled.Label>{zone.name}</Styled.Label>
        <Styled.ButtonContainer>
          <Button
            type="button"
            onClick={deleteZone}
            tertiary
            disabled={isLoading}
          >
            Radera
          </Button>
          <Button
            type="button"
            onClick={() => navigate(`/account/zones/${zone.id}/edit`)}
            tertiary
            disabled={isLoading}
          >
            Redigera
          </Button>
        </Styled.ButtonContainer>
      </Styled.SplitContainer>
      <Styled.AddressText>{zone.address}</Styled.AddressText>
    </Styled.Container>
  );
};
