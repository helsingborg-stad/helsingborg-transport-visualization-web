import { getEvents, exportEvents, getGroupedEvents } from 'api/event';

export const useEventApi = () => {
  const getAllEvents = (filter?: string) => getEvents(filter);
  const exportAllEvents = (filter?: string) => exportEvents(filter);
  const getAllGroupedEvents = (filter?: string) => getGroupedEvents(filter);

  return {
    getAllEvents,
    exportAllEvents,
    getAllGroupedEvents,
  };
};
