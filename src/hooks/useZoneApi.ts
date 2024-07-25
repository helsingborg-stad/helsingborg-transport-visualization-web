import {
  getZones, getDistributionZones, getDeliveryZones, getZonesByOrganisation, deleteZone, postZones,
  patchZone,
} from 'api/zone';
import { FeatureCollection } from 'types/zone';

export const useZoneApi = () => {
  const getAllZones = () => getZones();
  const getAllZonesByOrganisation = (id: string) => getZonesByOrganisation(id);
  const getRelatedDistributionZones = (id: string) => getDistributionZones(id);
  const getRelatedDeliveryZones = (id: string) => getDeliveryZones(id);
  const deleteZoneById = (id: string) => deleteZone(id);
  const createZones = (zones: FeatureCollection) => postZones(zones);
  const editZone = (id: string, zone: FeatureCollection) => patchZone(id, zone);

  return {
    getAllZones,
    getAllZonesByOrganisation,
    getRelatedDistributionZones,
    getRelatedDeliveryZones,
    deleteZoneById,
    createZones,
    editZone,
  };
};
