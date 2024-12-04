import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

type ButtonProps = {
  primary?: boolean;
  outline?: boolean;
  isActive?: boolean;
} & React.HTMLProps<HTMLButtonElement>;

export const Button = styled.button<ButtonProps>`
  --button-background-color: var(--color-black);
  --button-color: var(--color-white);
  
  border-radius: var(--border-radius-md);
  font-family: var(--font-family);
  background: var(--button-background-color);
  color: var(--button-color);
  cursor: pointer;
  font-weight: var(--font-weight-400);
  font-size: 12px;
  width: fit-content;
  line-height: var(--line-height-xxxs);
  padding: 7px 14px;

  &:disabled {
    background-color: grey;
  }

  ${({ outline }) => outline
  && css`
    border: 1px solid var(--color-gray-7);
    --button-background-color: var(--color-white);
    --button-color: var(--color-black);
  `}

  ${({ isActive }) => isActive
  && css`
    border: 1px solid var(--color-black);
    --button-background-color: var(--color-white);
    --button-color: var(--color-black);
  `}
`;
