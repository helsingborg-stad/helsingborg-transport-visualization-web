import { getEvents, exportEvents } from 'api/event';

export const useEventApi = () => {
  const getAllEvents = (filter?: string) => getEvents(filter);
  const exportAllEvents = (filter?: string) => exportEvents(filter);

  return {
    getAllEvents,
    exportAllEvents,
  };
};
