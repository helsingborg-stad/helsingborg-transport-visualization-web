import { useState, useCallback } from 'react';
import { ZodError } from 'zod';
import { useNavigate } from 'react-router-dom';
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
  const [isLoading, setIsLoading] = useState(false);
  const [featureCollection, setFeatureCollection] = useState<FeatureCollection | null>(null);
  const [errors, setErrors] = useState<ErrorMessage>({});
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
          name: feature.properties.name ? feature.properties.name : '',
          area: feature.properties.area ? feature.properties.area : '',
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
    setFeatureCollection(newFeatureCollection);
  };

  const reset = () => {
    setErrors({});
    setFeatureCollection(null);
  };

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
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
      }
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
  };
};
