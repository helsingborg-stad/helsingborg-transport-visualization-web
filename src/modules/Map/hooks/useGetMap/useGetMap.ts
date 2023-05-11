import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useZoneApi } from 'hooks/useZoneApi';
import { FeatureCollection } from 'types/zone';
import { Organisation } from 'types/organisation';

const { VITE_GOOGLE_MAPS_API_KEY } = import.meta.env;

export const useGetMap = () => {
  const { getAllZones } = useZoneApi();
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [zones, setZones] = useState<FeatureCollection>();
  const mapRef = useRef<HTMLDivElement>(null);

  const InfoBox = (organisation: Organisation, name: string) => `
  <div style="padding: 12px 16px;">
  <h2 style="margin-bottom: 10px;">${name}</h2>
  <div>
    <p style="margin-bottom: 5px;">Kontaktperson: ${organisation.contactPerson}</p>
    <p style="margin-bottom: 5px;">${organisation.email}</p>
    <p style="margin-bottom: 5px;">${organisation.mobileNumber}</p>
  </div>
  </div>
  `;

  useEffect(() => {
    setIsLoading(true);
    getAllZones()
      .then(({ data }) => setZones(data))
      .catch((e) => setError(e.message));
  }, []);

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
          center: { lat: 56.046467, lng: 12.694512 },
          zoom: 10,
        });

        if (!zones) {
          setIsLoading(false);
          return;
        }

        const infoWindow = new google.maps.InfoWindow();

        map.data.addListener('click', (event: google.maps.Data.MouseEvent) => {
          const name = event.feature.getProperty('name');
          const organisation = event.feature.getProperty('organisation');

          infoWindow.setContent(InfoBox(organisation, name));
          infoWindow.setPosition(event.latLng);

          infoWindow.open(map);
        });
        map.data.addGeoJson(zones);
      })
      .catch((err) => console.log('Err occurred while loading Google Maps', err))
      .finally(() => setIsLoading(false));

    return () => {
      if (mapRef.current) {
        // eslint-disable-next-line no-param-reassign
        mapRef.current.innerHTML = '';
      }
    };
  }, [zones]);
  return {
    mapRef,
    isLoading,
    error,
  };
};
