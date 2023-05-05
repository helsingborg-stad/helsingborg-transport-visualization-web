import { useState, useEffect } from 'react';
import { useFilterApi } from 'hooks/useFilterApi';
import { OrgWithName } from 'api/filter/types';
import { FilterOptions, CheckboxFilter } from 'types/delivery';

export type FilterType = {
  organisations: CheckboxFilter;
  names: CheckboxFilter;
  areas: CheckboxFilter;
};

type FilterOptionType = {
  organisations: OrgWithName[];
  names: string[];
  areas: string[];
};

export const useGetEventFilters = () => {
  const { getFiltersForEvent } = useFilterApi();
  const [filterOptions, setFilterOptions] = useState<FilterOptionType>();
  const [filters, setFilters] = useState<FilterType>();
  const [reload, setReload] = useState(true);
  const triggerReload = () => setReload(true);

  const resetFilters = (filter?: FilterOptions) => {
    if (filter && filters) {
      setFilters({
        ...filters,
        [filter]: Object.entries(filters?.[filter] || {}).map((arr) => arr[0])
          .reduce((acc, curr) => ({
            ...acc,
            [curr]: false,
          }), {}),
      });
      return;
    }
    if (filterOptions) {
      setFilters({
        areas: filterOptions.areas.reduce(
          (acc, curr) => ({
            ...acc,
            [curr]: false,
          }),
          {},
        ),
        names: filterOptions.names.reduce(
          (acc, curr) => ({
            ...acc,
            [curr]: false,
          }),
          {},
        ),
        organisations: filterOptions.organisations.reduce(
          (acc, curr) => ({
            ...acc,
            [curr.orgNumber]: false,
          }),
          {},
        ),
      });
    }
  };

  const checkFilter = (filterName: FilterOptions, key: string) => {
    if (filters) {
      setFilters({
        ...filters,
        [filterName]: {
          ...filters[filterName],
          [key]: !filters[filterName][key],
        },
      });
    }
  };

  useEffect(() => {
    getFiltersForEvent().then(({ data }) => {
      setFilterOptions(data);
      const params = new URLSearchParams(window.location.search);
      const areas = params.get(FilterOptions.AREAS)?.split(',') || [];
      const names = params.get(FilterOptions.NAMES)?.split(',') || [];
      const organisations = params.get(FilterOptions.ORGANISATIONS)?.split(',') || [];

      setFilters({
        areas: data.areas.reduce(
          (acc, curr) => ({
            ...acc,
            [curr]: areas.includes(curr),
          }),
          {},
        ),
        names: data.names.reduce(
          (acc, curr) => ({
            ...acc,
            [curr]: names.includes(curr),
          }),
          {},
        ),
        organisations: data.organisations.reduce(
          (acc, curr) => ({
            ...acc,
            [curr.orgNumber]: organisations.includes(curr.orgNumber),
          }),
          {},
        ),
      });
    });
  }, []);

  useEffect(() => {
    const getFilterList = (key: FilterOptions) => Object.entries(filters?.[key] || {})
      .filter(([, value]) => value).map(([mapKey]) => mapKey);

    if (filterOptions && reload) {
      const params = new URLSearchParams();
      const areas = getFilterList(FilterOptions.AREAS);
      const names = getFilterList(FilterOptions.NAMES);
      const organisations = getFilterList(FilterOptions.ORGANISATIONS);

      if (areas.length > 0) {
        params.append(FilterOptions.AREAS, areas.join(','));
      }
      if (names.length > 0) {
        params.append(FilterOptions.NAMES, names.join(','));
      }
      if (organisations.length > 0) {
        params.append(FilterOptions.ORGANISATIONS, organisations.join(','));
      }
      window.history.replaceState(
        {},
        '',
        `${window.location.pathname}?${params.toString()}`,
      );
      /**
       * TODO: Make request to API with filters
       */
      setReload(false);
    }
  }, [filters, reload]);

  return {
    filters,
    checkFilter,
    resetFilters,
    triggerReload,
  };
};