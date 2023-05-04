import { useState } from 'react';

export type AreaFilter = { [key: string]: boolean };

export const useGetFilters = () => {
  const [areaFilter, setAreaFilter] = useState<AreaFilter>({
    'Kungsgatan 1': false,
    'Drottingatan 2': false,
    'Stationsvägen 2': false,
  });

  const clearAreaFilters = () => setAreaFilter({
    'Kungsgatan 1': false,
    'Drottingatan 2': false,
    'Stationsvägen 2': false,
  });

  return {
    areaFilter,
    setAreaFilter,
    clearAreaFilters,
  };
};
