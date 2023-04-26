import { FC } from 'react';
import * as Styled from './styled';

type ButtonProps = {} & React.HTMLProps<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, disabled }) => (
  <Styled.Button disabled={disabled}>{children}</Styled.Button>
);
