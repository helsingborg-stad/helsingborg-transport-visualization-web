import { FC } from 'react';
import { Button } from 'components';
import * as Styled from './styled';

type InputProps = {
  name: string;
  address: string;
  onClick: () => void;
  isLoading: boolean;
};

export const Zone: FC<InputProps> = ({
  name, address, onClick, isLoading,
}) => (
  <Styled.Container>
    <Styled.SplitContainer>
      <Styled.Label>{name}</Styled.Label>
      <Styled.ButtonContainer>
        <Button
          type="button"
          onClick={onClick}
          tertiary
          disabled={isLoading}
        >
          Radera
        </Button>
      </Styled.ButtonContainer>
    </Styled.SplitContainer>
    <Styled.AddressText>{address}</Styled.AddressText>
  </Styled.Container>
);
