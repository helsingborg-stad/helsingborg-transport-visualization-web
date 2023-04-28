import { FC } from 'react';
import * as Styled from './styled';

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
} & React.HTMLProps<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
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

Button.defaultProps = {
  primary: true,
  secondary: false,
};
