import styled from 'styled-components';

export const Title = styled.h1`
  color: var(--color-black);
  font-size: var(--font-size-heading-xs);
  line-height: var(--line-height-xxxl);
  font-weight: var(--font-weight-800);
`;

export const Text = styled.p`
  color: var(--color-black);
  font-size: var(--font-size-body-md);
  line-height: var(--line-height-xs);
  font-weight: var(--font-weight-400);
  margin-bottom: var(--spacing-xs);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: var(--spacing-s);
`;
