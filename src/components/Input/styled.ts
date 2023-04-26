import styled from 'styled-components';

type InputProps = {
  error: boolean;
};

export const Input = styled.input<InputProps>`
  --input-background-color: #F7F7F8;

  padding: 15px 16px;
  font-size: 18px;
  border-radius: 12px;
  border: none;
  background-color: var(--input-background-color);
  width: 100%;
`;
