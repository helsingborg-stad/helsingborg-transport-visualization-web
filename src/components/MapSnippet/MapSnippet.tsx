import { FC } from 'react';
import { Feature } from 'types/zone';
import { useRenderMap } from './useRenderMap';

type MapSnippetProps = {
  zone: Feature;
};

export const MapSnippet: FC<MapSnippetProps> = ({
  zone,
}) => {
  const { mapRef } = useRenderMap(zone);

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};
