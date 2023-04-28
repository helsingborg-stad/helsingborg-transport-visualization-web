import styled, { css } from 'styled-components';

type InputProps = {
  error: boolean;
};

export const Label = styled.p`
  font-size: var(--font-size-body-md);
  color: var(--color-black-2);
  line-height: var(--line-height-xs);
  font-weight: var(--font-weight-400);
  margin-bottom: var(--spacing-xxs);
`;

export const Input = styled.input<InputProps>`

  padding: 15px 16px;
  font-size: var(--font-size-body-lg);
  border-radius: var(--border-radius-sm);
  border: 1px solid;
  border-color: transparent;
  outline: none;
  background-color: var(--color-gray-1);
  width: 100%;

  &:focus {
    border-color: var(--color-black-3);
  }

  ${({ error }) => error
    && css`
      border: 1px solid;
      border-color: var(--color-red-1);
    `}
`;

export const ErrorText = styled.p`
  font-size: var(--font-size-body-xs);
  color: var(--color-red-1);
  line-height: var(--line-height-xxs);
  font-weight: var(--font-weight-500);
  margin-top: 10px;
`;

export const Info = styled.p`
  font-size: var(--font-size-body-xs);
  color: var(--color-gray-4);
  line-height: var(--line-height-xxs);
  font-weight: var(--font-weight-500);
  margin-top: 10px;
`;
