import { TableGrid } from 'modules/Delivery/layouts';
import styled from 'styled-components';

export const Container = styled(TableGrid)`
  padding: var(--spacing-xxs) 0;
`;

export const SmallLabel = styled.p`
  color: var(--color-gray-5);
  font-size: var(--font-size-body-xxs);
  line-height: 12px;
  font-weight: var(--font-weight-400);
`;

const Column = styled.div`
  display: flex;
  font-size: var(--font-size-body-xs);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-xxxs);
  margin: auto 0;
`;

export const DayColumn = styled(Column)``;
export const PlaceColumn = styled(Column)`
  flex-direction: column;
`;
export const TypeColumn = styled(Column)``;
export const TimeInColumn = styled(Column)``;
export const TimeOutColumn = styled(Column)``;
export const CarrierColumn = styled(Column)``;
export const AreaColumn = styled(Column)``;
export const DateColumn = styled(Column)``;

export const SVGContainer = styled.img`
  width: 16px;
  height: 16px;
`;
