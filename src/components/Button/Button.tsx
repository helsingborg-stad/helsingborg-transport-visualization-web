import { FC } from 'react';
import * as Styled from './styled';
import { ButtonSize } from './types';

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  buttonSize?: ButtonSize;
} & React.HTMLProps<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children, disabled, primary, secondary, outline, buttonSize,
}) => (
  <Styled.Button
    disabled={disabled}
    primary={primary}
    secondary={secondary}
    outline={outline}
    buttonSize={buttonSize}
  >
    {children}
  </Styled.Button>
);

Button.defaultProps = {
  primary: true,
  secondary: false,
  outline: false,
  buttonSize: ButtonSize.LARGE,
};
