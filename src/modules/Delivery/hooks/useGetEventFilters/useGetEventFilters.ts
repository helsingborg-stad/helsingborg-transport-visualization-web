import { useState, useEffect } from 'react';
import { useFilterApi } from 'hooks/useFilterApi';
import { OrgWithName } from 'api/filter/types';

export type AreaFilter = { [key: string]: boolean };

type Filter = {
  oranisations: OrgWithName[];
  names: string[];
  areas: string[];
};

export const useGetEventFilters = () => {
  const { getFiltersForEvent } = useFilterApi();
  const [filters, setFilters] = useState<Filter>();

  const [areaFilter, setAreaFilter] = useState<AreaFilter | {}>({});

  const clearAreaFilters = () => {
    const cleared = filters?.areas.reduce((acc, curr) => (
      {
        ...acc,
        [curr]: false,
      }
    ), {});
    if (cleared) {
      setAreaFilter(cleared);
    }
  };

  useEffect(() => {
    getFiltersForEvent()
      .then(({ data }) => {
        setFilters(data);
        const areaFilters = data.areas.reduce((acc, curr) => (
          {
            ...acc,
            [curr]: false,
          }
        ), {});
        setAreaFilter(areaFilters);
      });
  }, []);

  return {
    areaFilter,
    setAreaFilter,
    clearAreaFilters,
  };
};
