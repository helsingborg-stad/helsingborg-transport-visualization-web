import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MarkerClusterer } from '@googlemaps/markerclusterer';
// eslint-disable-next-line import/no-extraneous-dependencies
import centerOfMass from '@turf/center-of-mass';
import { useZoneApi } from 'hooks/useZoneApi';
import { FeatureCollection } from 'types/zone';
import { Organisation } from 'types/organisation';
import DistributionZoneIcon from 'assets/distribution_zone.svg';
import DeliveryZoneIcon from 'assets/delivery_zone.svg';

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
          mapTypeControl: false,
          fullscreenControl: false,
          zoomControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT,
          },
          streetViewControl: false,
          styles: [
            {
              featureType: 'poi',
              stylers: [{ visibility: 'off' }],
            },
          ],
        });

        if (!zones) {
          setIsLoading(false);
          return;
        }
        const infoWindow = new google.maps.InfoWindow({
          pixelOffset: new google.maps.Size(0, -30),
        });

        const markers = zones.features.map((zone) => {
          const center = centerOfMass(zone.geometry).geometry.coordinates;
          const marker = new google.maps.Marker({
            // eslint-disable-next-line max-len
            position: { lng: center[0], lat: center[1] },
            map,
            icon: zone.properties.type === 'distribution' ? DistributionZoneIcon : DeliveryZoneIcon,
          });

          marker.addListener('click', (event: google.maps.Data.MouseEvent) => {
            const { name, organisation } = zone.properties;

            infoWindow.setContent(InfoBox(organisation, name));
            infoWindow.setPosition(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()));

            infoWindow.open(map);
          });
          return marker;
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const markCluster = new MarkerClusterer({ map, markers });
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
