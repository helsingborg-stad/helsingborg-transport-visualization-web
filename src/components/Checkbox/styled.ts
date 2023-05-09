import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: wrap;
  gap: 11px;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const ErrorText = styled.p`
  font-size: var(--font-size-body-xs);
  color: var(--color-red-1);
  line-height: var(--line-height-xxs);
  font-weight: var(--font-weight-500);
  margin-top: 10px;
`;
