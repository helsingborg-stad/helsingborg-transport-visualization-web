import { FilterList } from './FilterList';
import { ListContent } from './ListContent';
import { ListHeader } from './ListHeader';
import * as Styled from './styled';

export const DeliveryList = () => (
  <Styled.Container>
    <FilterList />
    <ListHeader />
    <ListContent />
  </Styled.Container>
);
