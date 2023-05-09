import { client } from '../baseAxios';
import { EventFilterResponse } from './types';

export const getEventFilters = () => client.get<EventFilterResponse>('/filters/events');
