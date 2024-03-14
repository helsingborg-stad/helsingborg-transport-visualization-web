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
