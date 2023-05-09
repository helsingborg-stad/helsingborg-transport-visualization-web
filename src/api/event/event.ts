import { Event } from 'types/event';
import { client } from '../baseAxios';

export const getEvents = (filter?: string) => client.get<Event[]>(`/zones/events${filter !== '' ? `?${filter}` : ''}`);
