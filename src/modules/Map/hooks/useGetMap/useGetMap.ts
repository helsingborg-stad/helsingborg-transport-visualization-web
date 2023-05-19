// @ts-nocheck -- no types for packages
import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import centerOfMass from '@turf/center-of-mass';
import { useZoneApi } from 'hooks/useZoneApi';
import { FeatureCollection } from 'types/zone';
import { Organisation } from 'types/organisation';
import DistributionZoneIcon from 'assets/distribution_zone.svg';
import DistributionZoneIconInverted from 'assets/distribution_zone_inverted.svg';
import DeliveryZoneIcon from 'assets/delivery_zone.svg';
import DeliveryZoneIconInverted from 'assets/delivery_zone_inverted.svg';
import ClusterIcon from 'assets/cluster_icon.svg';
import { ZoneType } from 'types/index';

const { VITE_GOOGLE_MAPS_API_KEY } = import.meta.env;

export const useGetMap = () => {
  const { getAllZones, getRelatedDistributionZones, getRelatedDeliveryZones } = useZoneApi();
  const [error, setError] = useState<boolean>(false);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setError(false);
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
        const renderer = {
          render: ({ count, position }) => new google.maps.Marker({
            label: {
              text: String(count),
              color: 'black',
              fontSize: '16px',
              fontWeight: '500',
            },
            position,
            zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count,
            icon: ClusterIcon,
          }),
        };
        const markCluster = new MarkerClusterer({ map, renderer });
        const removeMarkerFromCluster = (marker: google.maps.Marker) => {
          markCluster.removeMarker(marker);
        };

        const addMarkerToCluster = (marker: google.maps.Marker) => {
          markCluster.addMarker(marker);
        };

        const invertIcon = (m: google.maps.Marker): void => {
          if (m.getIcon() === DeliveryZoneIcon) {
            m.setIcon(DeliveryZoneIconInverted);
          } else if (m.getIcon() === DistributionZoneIcon) {
            m.setIcon(DistributionZoneIconInverted);
          }
        };

        const revertIcon = (m: google.maps.Marker): void => {
          if (m.getIcon() === DeliveryZoneIconInverted) {
            m.setIcon(DeliveryZoneIcon);
          } else if (m.getIcon() === DistributionZoneIconInverted) {
            m.setIcon(DistributionZoneIcon);
          }
        };

        const infoWindow = new google.maps.InfoWindow({
          pixelOffset: new google.maps.Size(0, -30),
        });

        const markers = zones.features.map((zone) => {
          const center = centerOfMass(zone.geometry).geometry.coordinates;
          const marker = new google.maps.Marker({
            position: { lng: center[0], lat: center[1] },
            label: {
              text: zone.properties.name,
              className: 'custom-marker-label',
            },
            map,
            icon: zone.properties.type === ZoneType.DISTRIBUTION
              ? DistributionZoneIcon
              : DeliveryZoneIcon,
          });

          marker.id = zone.properties.id;
          marker.addListener('click', async (event: google.maps.Data.MouseEvent) => {
            if (event.latLng) {
              const { name, organisation } = zone.properties;
              infoWindow.setContent(InfoBox(organisation, name));
              infoWindow.setPosition(
                new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()),
              );
              infoWindow.open(map);
              invertIcon(marker);
              const relatedZones = zone.properties.type === ZoneType.DELIVERY
                ? await getRelatedDistributionZones(zone.properties.id)
                : await getRelatedDeliveryZones(zone.properties.id);
              if (relatedZones.data.features === null) {
                markers.forEach((m) => {
                  if (m !== marker) {
                    removeMarkerFromCluster(m);
                  } else {
                    invertIcon(m);
                  }
                });
              }
              const arrayOfZoneIds = relatedZones.data.features?.map((z) => z.properties.id) || [];
              markers.forEach((m) => {
                if (m.id !== zone.properties.id) {
                  removeMarkerFromCluster(m);
                }
                if (arrayOfZoneIds.includes(m.id)) {
                  addMarkerToCluster(m);
                  invertIcon(m);
                }
              });
            }
          });
          google.maps.event.addListener(infoWindow, 'closeclick', () => {
            markers.forEach((m) => {
              addMarkerToCluster(m);
              revertIcon(m);
            });
          });
          google.maps.event.addListener(map, 'click', () => {
            infoWindow.close();
            markers.forEach((m) => {
              addMarkerToCluster(m);
              revertIcon(m);
            });
          });
          return marker;
        });
        google.maps.event.addListener(map, 'zoom_changed', () => {
          infoWindow.close();
        });
        markCluster.addMarkers(markers);
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));

    return () => {
      if (mapRef.current) {
        // eslint-disable-next-line no-param-reassign, react-hooks/exhaustive-deps
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
