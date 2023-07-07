import { FeatureCollection } from 'types/zone';
import { client } from '../baseAxios';

export const getZones = () => client.get<FeatureCollection>('/zones/');
export const getZonesByOrganisation = (id: string) => client.get<FeatureCollection>(`/organisations/${id}/zones`);
export const getDistributionZones = (id: string) => client.get<FeatureCollection>(`/zones/${id}/distribution`);
export const getDeliveryZones = (id: string) => client.get<FeatureCollection>(`/zones/${id}/delivery`);
export const deleteZone = (id: string) => client.delete(`/zones/${id}`);
