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

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-gray-2);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: var(--spacing-xs);
  grid-template-areas:
    "a b c d e"
    "f g h i j";
`;

export const StatisticsContainer = styled.div`
  display: flex;
  gap: var(--spacing-xs);
  align-items: center;
  flex-direction: column;
  margin-top: var(--spacing-xs);
  margin-bottom: var(--spacing-xs);
`;

export const StatisticsText = styled.p`
  font-size: var(--font-size-body-xs);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-xxxs);
`;
