import { useState } from 'react';
import { Event } from 'types/event';
import { useEventApi } from 'hooks/useEventApi';
import { downloadBlobAsFile } from 'utils/downloadFile';

export const useGetEvents = () => {
  const { getAllEvents, exportAllEvents, getAllGroupedEvents } = useEventApi();
  const [events, setEvents] = useState<Event[]>();
  const [groupedEvents, setGroupedEvents] = useState<Event[][]>();
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchEvents = async (filter?: string) => {
    try {
      setError(false);
      setIsLoading(true);
      setGroupedEvents(undefined);
      const { data } = await getAllEvents(filter);
      setEvents(data);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchGroupedEvents = async (filter?: string) => {
    try {
      setError(false);
      setIsLoading(true);
      setEvents(undefined);
      const { data } = await getAllGroupedEvents(filter);
      setGroupedEvents(data);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
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
    groupedEvents,
    fetchEvents,
    exportEvents,
    fetchGroupedEvents,
    error,
    isLoading,
  };
};
