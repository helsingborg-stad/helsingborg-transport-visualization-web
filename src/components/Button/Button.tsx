import { FC } from 'react';
import * as Styled from './styled';

export const Button: FC<Styled.ButtonProps> = ({
  children, disabled, primary, secondary,
}) => (
  <Styled.Button
    disabled={disabled}
    primary={primary}
    secondary={secondary}
  >
    {children}
  </Styled.Button>
);
