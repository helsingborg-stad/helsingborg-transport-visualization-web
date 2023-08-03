// @ts-nocheck -- no types for packages
import { useState, useCallback } from 'react';
import { ZodError } from 'zod';
import { useNavigate } from 'react-router-dom';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import turfPolygon from 'turf-polygon';
import turfPoint from 'turf-point';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import { useZoneApi } from 'hooks/useZoneApi';
import { useAuth } from 'hooks/useAuth';
import { FeatureCollection, Feature } from 'types/zone';
import { featureCollectionValidation } from './createZones.validation';

type ErrorMessage = {
  [key: string]: {
    [key: string]: string;
  };
};

export const useCreateZonesForm = () => {
  const {
    ready,
    suggestions: { status: addressStatus, data: addressData },
    setValue: setAddressValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ['address'],
      componentRestrictions: {
        country: 'se',
      },
    },
    debounce: 300,
  });
  const [activeAddress, setActiveAddress] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [featureCollection, setFeatureCollection] = useState<FeatureCollection | null>(null);
  const [errors, setErrors] = useState<ErrorMessage>({});
  const [apiErrorText, setApiErrorText] = useState<string>('');
  const { createZones } = useZoneApi();
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles: any) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      const data = JSON.parse(reader.result as string);
      data.features = data.features.map((feature: Feature, index: number) => ({
        ...feature,
        properties: {
          ...feature.properties,
          id: index,
          type: ['delivery', 'distribution'].includes(feature.properties.type) ? feature.properties.type : 'delivery',
          address: feature.properties.address ? feature.properties.address : '',
          name: feature.properties.name ? feature.properties.name : '',
          area: feature.properties.area ? feature.properties.area : '',
          lat: null,
          lng: null,
        },
      }));
      setFeatureCollection(data);
    };
    reader.readAsText(file);
  }, []);

  const setFieldValue = (index: number, name: string) => ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (!featureCollection) return;
    const newFeatureCollection = { ...featureCollection };
    newFeatureCollection.features[index].properties = {
      ...newFeatureCollection.features[index].properties,
      [name]: value,
    };
    if (name === 'address') {
      setActiveAddress(newFeatureCollection.features[index].properties.id);
      newFeatureCollection.features[index].properties = {
        ...newFeatureCollection.features[index].properties,
        lat: null,
        lng: null,
      };
      setAddressValue(value);
    }
    setFeatureCollection(newFeatureCollection);
  };

  const reset = () => {
    setErrors({});
    setFeatureCollection(null);
    setApiErrorText('');
  };

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setApiErrorText('');
    try {
      featureCollectionValidation.parse(featureCollection);
    } catch (err: any) {
      if (err instanceof ZodError) {
        const zodErrors: ErrorMessage = {};
        err.issues.forEach((issue) => {
          const fieldName = issue.path[3];
          const index = issue.path[1];
          const errorMessage = issue.message;
          zodErrors[index] = zodErrors[index] || {};
          if (!zodErrors[index][fieldName]) {
            zodErrors[index] = {
              ...zodErrors[index],
              [fieldName]: errorMessage,
            };
          }
        });
        setErrors(zodErrors);
        setIsLoading(false);
      }
      return;
    }

    createZones(featureCollection as FeatureCollection).then(() => {
      setIsLoading(false);
      reset();
    }).catch((err) => {
      if (err.response.status === 401) {
        logOut();
        navigate('/login');
      } else if (err.response.status === 400) {
        setApiErrorText('En eller flera av zonerna finns redan registrerade.');
      }
    });
  };

  const handleSelectAddress = (index: number, { description }: any) => () => {
    if (!featureCollection) return;
    setAddressValue(description, false);
    setErrors({});
    setActiveAddress('');
    clearSuggestions();

    getGeocode({ address: description }).then((results) => {
      const { lat, lng } = getLatLng(results[0]);
      const area = results[0].address_components.find((a) => a.types.includes('sublocality')).long_name;
      const pt = turfPoint([lng, lat]);
      const poly = turfPolygon(featureCollection.features[index].geometry.coordinates);
      const isInside = booleanPointInPolygon(pt, poly);
      if (!isInside) {
        setErrors({
          [index]: {
            address: 'Adressen ligger utanför zonen',
          },
        });
        return;
      }
      const newFeatureCollection = { ...featureCollection };
      newFeatureCollection.features[index].properties = {
        ...newFeatureCollection.features[index].properties,
        address: description,
        area: area || '',
        lat,
        lng,
      };
      setFeatureCollection(newFeatureCollection);
    });
  };

  return {
    isLoading,
    onDrop,
    featureCollection,
    setFieldValue,
    reset,
    submitForm,
    errors,
    apiErrorText,
    ready,
    addressStatus,
    clearSuggestions,
    addressData,
    handleSelectAddress,
    activeAddress,
  };
};
