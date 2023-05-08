import { useState } from 'react';
import { Event } from 'types/event';
import { useEventApi } from 'hooks/useEventApi';

export const useGetEvents = () => {
  const { getAllEvents } = useEventApi();
  const [events, setEvents] = useState<Event[]>();

  const fetchEvents = (filter?: string) => {
    getAllEvents(filter)
      .then(({ data }) => {
        setEvents(data);
      });
  };

  return {
    events,
    fetchEvents,
  };
};
