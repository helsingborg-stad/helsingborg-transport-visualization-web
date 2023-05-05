import { useState, useEffect } from 'react';
import { useFilterApi } from 'hooks/useFilterApi';
import { OrgWithName } from 'api/filter/types';

export type OrganisationFilterType = {
  [key: string]: boolean;
};

export type NameFilterType = {
  [key: string]: boolean;
};

export type AreaFilterType = {
  [key: string]: boolean;
};

export type FilterType = {
  organisations: OrganisationFilterType;
  names: NameFilterType;
  areas: AreaFilterType;
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

  const resetFilters = (filter?: 'organisations' | 'names' | 'areas') => {
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

  const checkFilter = (filterName: 'organisations' | 'names' | 'areas', key: string) => {
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
      const areas = params.get('areas')?.split(',') || [];
      const names = params.get('names')?.split(',') || [];
      const organisations = params.get('organisations')?.split(',') || [];

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
    const getFilterList = (key: 'organisations' | 'names' | 'areas') => Object.entries(filters?.[key] || {})
      .filter(([, value]) => value).map(([mapKey]) => mapKey);

    if (filterOptions && reload) {
      const areas = getFilterList('areas');
      const names = getFilterList('names');
      const organisations = getFilterList('organisations');

      const params = new URLSearchParams();
      if (areas.length > 0) {
        params.append('areas', areas.join(','));
      }
      if (names.length > 0) {
        params.append('names', names.join(','));
      }
      if (organisations.length > 0) {
        params.append('organisations', organisations.join(','));
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
