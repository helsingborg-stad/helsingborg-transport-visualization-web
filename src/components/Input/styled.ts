import styled from 'styled-components';

type InputProps = {
  error: boolean;
};

export const Input = styled.input<InputProps>`
  padding: 15px 16px;
  font-size: var(--font-size-body-lg);
  border-radius: var(--border-radius-sm);
  border: none;
  background-color: var(--color-gray-1);
  width: 100%;
`;
