import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import { FC, useState } from 'react';
import { Event } from 'types/event';
import * as Styled from './styled';
import { EventRow } from '../EventRow';

type Props = {
  events: Event[];
};

export const GroupOfEvents: FC<Props> = ({
  events,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Container>
      <Styled.GroupBar onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        <Styled.GroupTitle>{`${events[0].organisation.name}`}</Styled.GroupTitle>
      </Styled.GroupBar>
      {isOpen
      && events.map((event) => (
        <EventRow event={event} key={event.id} />
      ))}
    </Styled.Container>
  );
};
