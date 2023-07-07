import {
  getZones, getDistributionZones, getDeliveryZones, getZonesByOrganisation, deleteZone,
} from 'api/zone';

export const useZoneApi = () => {
  const getAllZones = () => getZones();
  const getAllZonesByOrganisation = (id: string) => getZonesByOrganisation(id);
  const getRelatedDistributionZones = (id: string) => getDistributionZones(id);
  const getRelatedDeliveryZones = (id: string) => getDeliveryZones(id);
  const deleteZoneById = (id: string) => deleteZone(id);

  return {
    getAllZones,
    getAllZonesByOrganisation,
    getRelatedDistributionZones,
    getRelatedDeliveryZones,
    deleteZoneById,
  };
};
