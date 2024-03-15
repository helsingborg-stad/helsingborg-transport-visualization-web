import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxs);
`;

export const GroupTitle = styled.h3`
  font-size: var(--font-size-heading-xxs);
  font-weight: var(--font-weight-500);
  align-self: center;
`;

export const GroupBar = styled.div`
 border-radius: 8px;
 padding: var(--spacing-xxs);
 background-color: var(--color-gray-1);
 display: flex;
 gap: var(--spacing-xs);
 cursor: pointer;
`;
