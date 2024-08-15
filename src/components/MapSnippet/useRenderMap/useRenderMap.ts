// @ts-nocheck -- no types for packages
import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import centerOfMass from '@turf/center-of-mass';
import { Feature } from 'types/zone';

const { VITE_GOOGLE_MAPS_API_KEY } = import.meta.env;

export const useRenderMap = (zone: Feature) => {
  const mapRef = useRef<HTMLDivElement>(null);

  const getCenterOfMass = () => {
    const center = centerOfMass(zone.geometry).geometry.coordinates;
    return { lat: center[1], lng: center[0] };
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    const loader = new Loader({
      apiKey: VITE_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
    });

    loader
      .load()
      .then((google) => {
        const map = new google.maps.Map(mapRef.current as HTMLElement, {
          center: getCenterOfMass(),
          zoom: 15,
          mapTypeControl: false,
          fullscreenControl: false,
          // no changes
          zoomControl: false,
          streetViewControl: false,
          styles: [
            {
              featureType: 'poi',
              stylers: [{ visibility: 'off' }],
            },
          ],
          draggable: false,
        });
        map.data.addGeoJson({ type: 'FeatureCollection', features: [zone] });
      });
  }, []);

  return {
    mapRef,
    isLoading,
  };
};
