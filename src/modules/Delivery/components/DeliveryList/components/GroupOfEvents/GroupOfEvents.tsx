import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import { FC, useState } from 'react';
import { Event, EventGroup } from 'types/event';
import { useDateConverter } from 'utils';
import * as Styled from './styled';
import { EventRow } from '../EventRow';

type Props = {
  events: Event[];
  statistics: EventGroup['statistics'];
};

export const GroupOfEvents: FC<Props> = ({
  events, statistics,
}) => {
  const { getWeekday, getYYYYMMDD } = useDateConverter();
  const [isOpen, setIsOpen] = useState(false);
  console.log('GroupOfEvents -> statistics', statistics);

  return (
    <Styled.Container>
      <Styled.GroupBar onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        <Styled.GroupTitle>{`${getWeekday(events[0].enteredAt)}: ${getYYYYMMDD(events[0].enteredAt)} ${events[0].organisation.name}`}</Styled.GroupTitle>
      </Styled.GroupBar>
      {isOpen
      && events.map((event) => (
        <EventRow event={event} key={event.id} />
      ))}
    </Styled.Container>
  );
};
