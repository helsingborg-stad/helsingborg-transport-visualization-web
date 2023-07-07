import styled from 'styled-components';

export const SideBarContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxs);
  margin-top: var(--spacing-xl);
  @media (max-width: 768px) {
    display: none;
  }
`;
