import { useState } from 'react';
import { Event } from 'types/event';
import { useEventApi } from 'hooks/useEventApi';
import { downloadBlobAsFile } from 'utils/downloadFile';

export const useGetEvents = () => {
  const { getAllEvents, exportAllEvents } = useEventApi();
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

  const exportEvents = async (filter?: string) => {
    try {
      setError(false);
      setIsLoading(true);
      const { data } = await exportAllEvents(filter);
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      downloadBlobAsFile(blob, 'events.xlsx');
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    events,
    fetchEvents,
    exportEvents,
    error,
    isLoading,
  };
};
