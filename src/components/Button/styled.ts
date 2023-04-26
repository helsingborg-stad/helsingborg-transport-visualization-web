import styled, { css } from 'styled-components';

export type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
} & React.HTMLProps<HTMLButtonElement>;

export const Button = styled.button<ButtonProps>`
  --button-background-color: #000000;
  --button-color: #FFFFFF;

  font-size: 18px;
  background: var(--button-background-color);
  color: var(--button-color);
  padding: 15px 30px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  width: 100%;

  &:disabled {
    background-color: grey;
  }

  ${({ secondary }) => secondary
    && css`
      --button-background: #EDEDED;
      --button-color: #000000;
    `}
`;
