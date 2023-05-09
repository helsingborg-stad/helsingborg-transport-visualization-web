import { getEvents } from 'api/event';

export const useEventApi = () => {
  const getAllEvents = (filter?: string) => getEvents(filter);

  return {
    getAllEvents,
  };
};
