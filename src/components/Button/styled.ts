import styled, { css } from 'styled-components';
import { ButtonSize } from './types';

export type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  tertiary?: boolean;
  buttonSize?: ButtonSize;
} & React.HTMLProps<HTMLButtonElement>;

export const Button = styled.button<ButtonProps>`
  --button-background-color: var(--color-black);
  --button-color: var(--color-white);
  --button-border-radius: var(--border-radius-sm);
  font-family: var(--font-family);

  font-size: 18px;
  background: var(--button-background-color);
  color: var(--button-color);
  padding: 15px 30px;
  border: none;
  border-radius: var(--button-border-radius);
  cursor: pointer;
  width: 100%;

  &:disabled {
    background-color: grey;
  }

  ${({ buttonSize }) => buttonSize === ButtonSize.SMALL
    && css`
      --button-border-radius: var(--border-radius-md);
      
      font-weight: var(--font-weight-700);
      font-size: 12px;
      width: fit-content;
      line-height: var(--line-height-xxxs);
      padding: 7px 14px;
  `}

  ${({ tertiary }) => tertiary
    && css`
      --button-background-color: none;
      --button-color: var(--color-black-4);
      text-decoration: underline;
  `}

  ${({ secondary }) => secondary
    && css`
      --button-background-color: var(--color-gray-3);
      --button-color: var(--color-black);
  `}

  ${({ outline }) => outline
  && css`
    border: 1px solid var(--color-gray-7);
    --button-background-color: var(--color-white);
    --button-color: var(--color-black);
  `}
`;
