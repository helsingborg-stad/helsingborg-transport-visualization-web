import { FeatureCollection } from 'types/zone';
import { client } from '../baseAxios';

export const getZones = () => client.get<FeatureCollection>('/zones/');
