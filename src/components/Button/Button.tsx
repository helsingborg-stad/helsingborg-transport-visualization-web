import { FC } from 'react';
import * as Styled from './styled';
import { ButtonSize } from './types';

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  outline?: boolean;
  isActive?: boolean;
  buttonSize?: ButtonSize;
  onClick: () => void;
  type: 'button' | 'submit' | 'reset' | undefined;
} & React.HTMLProps<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children, disabled, primary, secondary, tertiary, outline, isActive, buttonSize, type, onClick,
}) => (
  <Styled.Button
    type={type}
    disabled={disabled}
    primary={primary}
    secondary={secondary}
    outline={outline}
    tertiary={tertiary}
    isActive={isActive}
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
  isActive: false,
  buttonSize: ButtonSize.LARGE,
};
