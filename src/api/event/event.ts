import { Event } from 'types/event';
import { client } from '../baseAxios';

export const getEvents = (filter?: string) => client.get<Event[]>(`/zones/events${filter !== '' ? `?${filter}` : ''}`);
export const getGroupedEvents = (filter?: string) => client.get<Event[][]>(`/zones/events/grouped${filter !== '' ? `?${filter}` : ''}`);
export const exportEvents = (filter?: string) => client.get<Blob>(
  `/zones/events/export${filter !== '' ? `?${filter}` : ''}`,
  {
    responseType: 'blob',
  },
);
export const importEvents = (file: File, password: string) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('password', password);
  return client.post('/zones/events/import', formData);
};
export const postImportEventsPassword = (password: string) => client.post('/zones/events/import/password', { password });
