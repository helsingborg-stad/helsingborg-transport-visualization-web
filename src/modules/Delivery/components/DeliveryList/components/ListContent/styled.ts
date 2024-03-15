import styled from 'styled-components';

export const NoResultText = styled.p`
  font-size: var(--font-size-body-xs);
  font-weight: var(--font-weight-600);
  line-height: var(--line-height-xxxs);
  padding-top: 18px;
`;

export const RefreshLink = styled.span`
  font-size: var(--font-size-body-xs);
  font-weight: var(--font-weight-600);
  line-height: var(--line-height-xxxs);
  text-decoration: underline;
  cursor: pointer;
`;

export const GroupedEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxs);
  margin-top: var(--spacing-xxs);
`;
