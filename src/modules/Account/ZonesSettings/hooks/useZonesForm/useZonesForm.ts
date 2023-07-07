import { useState, useEffect } from 'react';
import { useZoneApi } from 'hooks/useZoneApi';
import { useAuth } from 'hooks/useAuth';
import { FeatureCollection } from 'types/zone';

export const useZonesForm = () => {
  const { organisation } = useAuth();
  const { getAllZonesByOrganisation, deleteZoneById } = useZoneApi();
  const [zones, setZones] = useState<FeatureCollection>({ type: 'FeatureCollection', features: [] });
  const [isLoading, setIsLoading] = useState<string | null>(null);

  useEffect(() => {
    if (organisation) {
      getAllZonesByOrganisation(organisation.id).then(({ data }) => {
        setZones(data);
      });
    }
  }, []);

  const deleteZone = (id: string) => () => {
    setIsLoading(id);
    deleteZoneById(id).then(() => {
      getAllZonesByOrganisation(organisation?.id as string).then(({ data }) => {
        setZones(data);
      });
    }).finally(() => setIsLoading(null));
  };

  return {
    zones,
    deleteZone,
    isLoading,
  };
};
