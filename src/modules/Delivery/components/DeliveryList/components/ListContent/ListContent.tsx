import { FC } from 'react';
import { Event } from 'types/event';
import * as Styled from './styled';
import { EventRow } from '../EventRow';
import { GroupOfEvents } from '../GroupOfEvents';

type ListContentProps = {
  events?: Event[];
  groupedEvents?: Event[][];
  resetFilters: () => void;
};

export const ListContent: FC<ListContentProps> = ({ events, groupedEvents, resetFilters }) => {
  if ((!events || events.length <= 0) && (!groupedEvents || groupedEvents.length <= 0)) {
    return (
      <Styled.NoResultText>
        Inga resultat. Begränsa filtrering och försök igen.
        {' '}
        <Styled.RefreshLink onClick={() => resetFilters()}>
          Rensa alla filter
        </Styled.RefreshLink>
      </Styled.NoResultText>
    );
  }

  return (
    <div>
      {events ? events.map((event) => (
        <EventRow event={event} key={event.id} />
      )) : groupedEvents?.map((eventList) => (
        <Styled.GroupedEventsContainer key={`group-of-events-${eventList[0].id}`}>
          <GroupOfEvents events={eventList} />
        </Styled.GroupedEventsContainer>
      ))}
    </div>
  );
};

ListContent.defaultProps = {
  events: undefined,
  groupedEvents: undefined,
};
