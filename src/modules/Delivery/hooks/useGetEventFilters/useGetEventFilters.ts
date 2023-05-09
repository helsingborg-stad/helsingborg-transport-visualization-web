import { useState, useEffect } from 'react';
import { useFilterApi } from 'hooks/useFilterApi';
import { OrgWithName, WeekdayWithName } from 'api/filter/types';
import { FilterOptions, CheckboxFilter } from 'types/delivery';

export type FilterType = {
  organisations: CheckboxFilter;
  names: CheckboxFilter;
  areas: CheckboxFilter;
  weekdays: CheckboxFilter;
};

export type FilterOptionType = {
  organisations: OrgWithName[];
  names: string[];
  areas: string[];
  weekdays: WeekdayWithName[];
};

type ActiveFilterType = {
  organisations: number;
  names: number;
  areas: number;
  weekdays: number;
};

type HookProps = {
  fetchEvents: (filter?: string) => void;
};

export const useGetEventFilters = ({ fetchEvents }: HookProps) => {
  const { getFiltersForEvent } = useFilterApi();
  const [filterOptions, setFilterOptions] = useState<FilterOptionType>();
  const [filters, setFilters] = useState<FilterType>();
  const [reload, setReload] = useState(true);
  const [activeFilters, setActiveFilters] = useState<ActiveFilterType>({
    organisations: 0,
    names: 0,
    areas: 0,
    weekdays: 0,
  });
  const triggerReload = () => setReload(true);

  const resetFilters = (filter?: FilterOptions) => {
    const createEmptyFilterObject = (filterName: string[]): { [key: string]: boolean } => filterName
      .reduce((acc, curr) => ({ ...acc, [curr]: false }), {});

    if (filter && filters) {
      setFilters({
        ...filters,
        [filter]: createEmptyFilterObject(Object.keys(filters[filter])),
      });
    } else if (filterOptions) {
      setFilters({
        areas: createEmptyFilterObject(filterOptions.areas),
        names: createEmptyFilterObject(filterOptions.names),
        organisations: createEmptyFilterObject(filterOptions.organisations.map((o) => o.orgNumber)),
        weekdays: createEmptyFilterObject(filterOptions.weekdays.map((w) => w.number)),
      });
    }
    triggerReload();
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

  // useEffect to fetch filter options from backend & sets active filters from url
  useEffect(() => {
    getFiltersForEvent()
      .then(({ data }) => {
        const allWeekdays = [
          {
            day: 'Måndag',
            number: '1',
          },
          {
            day: 'Tisdag',
            number: '2',
          },
          {
            day: 'Onsdag',
            number: '3',
          },
          {
            day: 'Torsdag',
            number: '4',
          },
          {
            day: 'Fredag',
            number: '5',
          },
          {
            day: 'Lördag',
            number: '6',
          },
          {
            day: 'Söndag',
            number: '7',
          },
        ];

        setFilterOptions({
          ...data,
          weekdays: allWeekdays,
        });

        // Get params from URL
        const params = new URLSearchParams(window.location.search);
        const areas = params.get(FilterOptions.AREAS)?.split(',') || [];
        const names = params.get(FilterOptions.NAMES)?.split(',') || [];
        const weekdays = params.get(FilterOptions.WEEKDAYS)?.split(',') || [];
        const organisations = params.get(FilterOptions.ORGANISATIONS)?.split(',') || [];

        // Sets filters based on params from URL (if there are any)
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
          weekdays: allWeekdays.reduce(
            (acc, curr) => ({
              ...acc,
              [curr.number]: weekdays.includes(curr.number),
            }),
            {},
          ),
        });
      });
  }, []);

  // useEffect called to update url based on chosend filter(s) and is triggered with reload state
  useEffect(() => {
    const getFilterList = (key: FilterOptions) => Object.entries(filters?.[key] || {})
      .filter(([, value]) => value)
      .map(([mapKey]) => mapKey);

    if (filterOptions && reload) {
      const params = new URLSearchParams();
      const areas = getFilterList(FilterOptions.AREAS);
      const names = getFilterList(FilterOptions.NAMES);
      const weekdays = getFilterList(FilterOptions.WEEKDAYS);
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
      if (weekdays.length > 0) {
        params.append(FilterOptions.WEEKDAYS, weekdays.join(','));
      }

      // Sets filter to show active filters on filter button(s)
      setActiveFilters({
        areas: areas.length,
        organisations: organisations.length,
        names: names.length,
        weekdays: weekdays.length,
      });

      const filter = params.toString();

      // Sets URL to current filter(s) & fetches filtered data
      window.history.replaceState({}, '', `${window.location.pathname}${filter !== '' ? `?${filter}` : ''}`);
      fetchEvents(filter);
      setReload(false);
    }
  }, [filters, reload]);

  return {
    filterOptions,
    activeFilters,
    filters,
    checkFilter,
    resetFilters,
    triggerReload,
  };
};
