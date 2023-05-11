import React from 'react';
import { useGetMap } from 'modules/Map/hooks';

export const Map: React.FC = () => {
  const { mapRef } = useGetMap();
  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};
