import { useState } from 'react';
import { Event } from 'types/event';
import { useEventApi } from 'hooks/useEventApi';

export const useGetEvents = () => {
  const { getAllEvents } = useEventApi();
  const [events, setEvents] = useState<Event[]>();
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchEvents = (filter?: string) => {
    setError(false);
    setIsLoading(true);
    getAllEvents(filter)
      .then(({ data }) => {
        setEvents(data);
      })
      .catch(() => setError(true));

    setIsLoading(false);
  };

  return {
    events,
    fetchEvents,
    error,
    isLoading,
  };
};
