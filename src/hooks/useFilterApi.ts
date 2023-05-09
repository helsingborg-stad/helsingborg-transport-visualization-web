import { getEventFilters } from 'api/filter';

export const useFilterApi = () => {
  const getFiltersForEvent = () => getEventFilters();

  return {
    getFiltersForEvent,
  };
};
