import { EventFilterResponse } from './types';
import { client } from '../baseAxios';

export const getEventFilters = () => client.get<EventFilterResponse>('/filters/events');
