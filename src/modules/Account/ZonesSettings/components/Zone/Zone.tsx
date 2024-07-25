import { FC } from 'react';
import { Button } from 'components';
import * as Styled from './styled';

type InputProps = {
  name: string;
  address: string;
  deleteZone: () => void;
  isLoading: boolean;
};

export const Zone: FC<InputProps> = ({
  name, address, deleteZone, isLoading,
}) => (
  <Styled.Container>
    <Styled.SplitContainer>
      <Styled.Label>{name}</Styled.Label>
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
          onClick={() => {}}
          tertiary
          disabled={isLoading}
        >
          Redigera
        </Button>
      </Styled.ButtonContainer>
    </Styled.SplitContainer>
    <Styled.AddressText>{address}</Styled.AddressText>
  </Styled.Container>
);
