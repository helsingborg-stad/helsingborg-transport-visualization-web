import {
  getEvents, exportEvents, getGroupedEvents, importEvents, postImportEventsPassword,
} from 'api/event';

export const useEventApi = () => {
  const getAllEvents = (filter?: string) => getEvents(filter);
  const exportAllEvents = (filter?: string) => exportEvents(filter);
  const getAllGroupedEvents = (filter?: string) => getGroupedEvents(filter);
  const importEventsPassword = (password: string) => postImportEventsPassword(password);
  const importEventsByExcel = (file: File, password: string) => importEvents(file, password);

  return {
    getAllEvents,
    exportAllEvents,
    getAllGroupedEvents,
    importEventsPassword,
    importEventsByExcel,
  };
};
