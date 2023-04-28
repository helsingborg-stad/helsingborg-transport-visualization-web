import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: wrap;
  gap: 11px;
  align-items: center;
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const Label = styled.span`
  font-size: var(--font-size-body-md);
  color: var(--color-black-2);
  line-height: var(--line-height-xs);
  font-weight: var(--font-weight-400);
`;

export const ErrorText = styled.p`
  font-size: var(--font-size-body-xs);
  color: var(--color-red-1);
  line-height: var(--line-height-xxs);
  font-weight: var(--font-weight-500);
  margin-top: 10px;
`;
