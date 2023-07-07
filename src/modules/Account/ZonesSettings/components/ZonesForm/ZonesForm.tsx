import { Feature } from 'types/zone';
import * as Styled from './styled';
import { Zone } from '../Zone';
import { useZonesForm } from '../../hooks/useZonesForm';

export const ZonesForm = () => {
  const { zones, deleteZone, isLoading } = useZonesForm();

  return (
    <Styled.ContentContainer>
      {zones.features.map((zone: Feature) => (
        <Zone
          name={zone.properties.name}
          address={zone.properties.address}
          onClick={deleteZone(zone.properties.id)}
          isLoading={isLoading === zone.properties.id}
          key={zone.properties.id}
        />
      ))}
    </Styled.ContentContainer>
  );
};
