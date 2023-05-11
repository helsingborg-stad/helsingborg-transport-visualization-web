import { getZones } from 'api/zone';

export const useZoneApi = () => {
  const getAllZones = () => getZones();

  return {
    getAllZones,
  };
};
