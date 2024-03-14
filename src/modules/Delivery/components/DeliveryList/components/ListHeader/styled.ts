import { TableGrid } from 'modules/Delivery/layouts';
import styled from 'styled-components';

export const Container = styled(TableGrid)`
  width: 100%;
`;

export const Label = styled.p`
  padding: var(--spacing-xs) 0;
  border-bottom: 1px solid var(--color-gray-6);
  color: var(--color-gray-5);
  font-size: var(--font-size-body-xxs);
  line-height: 12px;
`;
