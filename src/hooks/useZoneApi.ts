import { getZones, getDistributionZones, getDeliveryZones } from 'api/zone';

export const useZoneApi = () => {
  const getAllZones = () => getZones();
  const getRelatedDistributionZones = (id: string) => getDistributionZones(id);
  const getRelatedDeliveryZones = (id: string) => getDeliveryZones(id);

  return {
    getAllZones,
    getRelatedDistributionZones,
    getRelatedDeliveryZones,
  };
};
