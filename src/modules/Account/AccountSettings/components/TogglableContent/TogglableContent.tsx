import React, { FC } from 'react';
import * as Styled from './styled';

type InputProps = {
  label?: string;
  value?: string;
  component?: React.ReactNode;
  showComponent?: boolean;
  onClick?: () => void;
};

export const TogglabelContent: FC<InputProps> = ({
  label, value, component, showComponent, onClick,
}) => (
  <Styled.Container>
    <Styled.SplitContainer>
      <Styled.Label>{label}</Styled.Label>
      <Styled.ToggleLabel onClick={onClick}>{showComponent ? 'Avbryt' : 'Ändra'}</Styled.ToggleLabel>
    </Styled.SplitContainer>
    {showComponent ? component : <Styled.InputText>{value}</Styled.InputText>}
  </Styled.Container>
);

TogglabelContent.defaultProps = {
  label: '',
  value: '',
  component: '',
  showComponent: false,
  onClick: () => {},
};
