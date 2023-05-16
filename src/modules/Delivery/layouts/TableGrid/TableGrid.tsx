import styled, { css } from 'styled-components';

// Export as css and component so it's easier to extend depending on the use case
export const tableGrid = css`
  display: grid;
  grid-template-columns:
    minmax(80px, 1fr) 
    minmax(180px, 1fr) 
    minmax(60px, 1fr) 
    minmax(80px, 1fr) 
    minmax(120px, 1fr)
    minmax(120px, 1fr)
    minmax(120px, 1fr)
    minmax(120px, 1fr);
  grid-gap: var(--spacing-5);
`;

export const TableGrid = styled.div`
  ${tableGrid}
`;
