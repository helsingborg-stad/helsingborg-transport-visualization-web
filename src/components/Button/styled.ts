import styled, { css } from 'styled-components';

export type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
} & React.HTMLProps<HTMLButtonElement>;

export const Button = styled.button<ButtonProps>`
  --button-background-color: var(--color-black);
  --button-color: var(--color-white);

  font-size: 18px;
  background: var(--button-background-color);
  color: var(--button-color);
  padding: 15px 30px;
  border: none;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  width: 100%;

  &:disabled {
    background-color: grey;
  }

  ${({ secondary }) => secondary
    && css`
      --button-background: var(--color-gray-3);
      --button-color: var(--color-black);
    `}
`;
