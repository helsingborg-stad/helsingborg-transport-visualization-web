import styled from 'styled-components';

export const Title = styled.h1`
  color: var(--color-black);
  font-size: var(--font-size-heading-xs);
  line-height: var(--line-height-xxxl);
  font-weight: var(--font-weight-800);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: var(--spacing-s);
  align-items: flex-end;
`;
