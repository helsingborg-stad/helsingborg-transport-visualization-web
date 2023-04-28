import { TableGrid } from 'modules/Delivery/layouts';
import styled from 'styled-components';

export const Container = styled(TableGrid)`
  padding: var(--spacing-xxs) 0;
  border-bottom: 1px solid var(--color-gray-6);
`;

export const Label = styled.p`
  color: var(--color-gray-5);
  font-size: var(--font-size-body-xxs);
  line-height: 12px;
`;
