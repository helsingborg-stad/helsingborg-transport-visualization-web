import styled from 'styled-components';

export const Label = styled.span`
  font-size: var(--font-size-body-xs);
  line-height: var(--line-height-xxxs);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const NoValue = styled.p`
  font-style: italic;
  font-weight: var(--font-weight-500);
  font-size: var(--font-size-body-md);
  line-height: var(--line-height-sm);
`;
