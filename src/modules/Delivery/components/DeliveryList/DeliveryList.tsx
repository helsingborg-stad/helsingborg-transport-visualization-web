import { useGetEvents } from 'modules/Delivery/hooks';
import { FilterList } from './FilterList';
import { ListContent } from './ListContent';
import { ListHeader } from './ListHeader';
import * as Styled from './styled';

export const DeliveryList = () => {
  const { fetchEvents, events } = useGetEvents();

  return (
    <Styled.Container>
      <FilterList fetchEvents={fetchEvents} />
      <ListHeader />
      <ListContent events={events} />
    </Styled.Container>
  );
};
