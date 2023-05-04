import { FC } from 'react';
import * as Styled from './styled';
import { ButtonSize } from './types';

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  outline?: boolean;
  buttonSize?: ButtonSize;
  onClick: () => void;
} & React.HTMLProps<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children, disabled, primary, secondary, tertiary, outline, buttonSize, onClick,
}) => (
  <Styled.Button
    disabled={disabled}
    primary={primary}
    secondary={secondary}
    outline={outline}
    tertiary={tertiary}
    buttonSize={buttonSize}
    onClick={onClick}
  >
    {children}
  </Styled.Button>
);

Button.defaultProps = {
  primary: true,
  secondary: false,
  outline: false,
  tertiary: false,
  buttonSize: ButtonSize.LARGE,
};
