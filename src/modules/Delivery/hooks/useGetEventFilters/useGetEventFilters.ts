import { useState, useEffect } from 'react';
import { useFilterApi } from 'hooks/useFilterApi';
import {
  ActiveFilterType, DateTimeFilterSelected, FilterOptionType, FilterType, FilterOptions,
} from 'types';
import { useGetFilterValues } from '../useGetFilterValues';

type HookProps = {
  fetchEvents: (filter?: string) => void;
  exportEvents: (filter?: string) => void;
};

export const useGetEventFilters = ({ fetchEvents, exportEvents }: HookProps) => {
  const { allWeekdays, dates, timeInterval } = useGetFilterValues();
  const { getFiltersForEvent } = useFilterApi();
  const [filterOptions, setFilterOptions] = useState<FilterOptionType>();
  const [filters, setFilters] = useState<FilterType>();
  const [filterState, setFilterState] = useState<string>();
  const [reload, setReload] = useState(true);
  const [activeFilters, setActiveFilters] = useState<ActiveFilterType>({
    organisations: 0,
    distributors: 0,
    names: 0,
    areas: 0,
    weekdays: 0,
    dates: 0,
    timeInterval: 0,
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
        distributors: filterOptions.distributors
          ? createEmptyFilterObject(filterOptions.distributors.map((d) => d.orgNumber)) : {},
        weekdays: createEmptyFilterObject(filterOptions.weekdays.map((w) => w.number)),
        dates: undefined,
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

  const setDateTimeFilter = (filterName: string) => (data: DateTimeFilterSelected) => {
    if (filters) {
      setFilters({
        ...filters,
        [filterName]: data,
      });
      triggerReload();
    }
  };

  // useEffect to fetch filter options from backend & set active filters from url
  useEffect(() => {
    getFiltersForEvent()
      .then(({ data }) => {
        setFilterOptions({
          ...data,
          weekdays: allWeekdays,
          dates,
          timeInterval,
        });

        // Get params from URL
        const params = new URLSearchParams(window.location.search);
        const areas = params.get(FilterOptions.AREAS)?.split(',') || [];
        const names = params.get(FilterOptions.NAMES)?.split(',') || [];
        const weekdays = params.get(FilterOptions.WEEKDAYS)?.split(',') || [];
        const organisations = params.get(FilterOptions.ORGANISATIONS)?.split(',') || [];
        const distributors = params.get(FilterOptions.DISTRIBUTORS)?.split(',') || [];
        const to = params.get('to') || '';
        const from = params.get('from') || '';
        const currentTimeInterval = params.get('timeInterval') || '';

        const hasDate = to !== '' && from !== '';
        const hasTimeInterval = currentTimeInterval !== '';
        const hasDistributors = data.distributors && data.distributors.length > 0;

        // Sets filters based on params from URL (if there are any)
        setFilters({
          areas: data.areas.reduce(
            (acc: any, curr: string) => ({
              ...acc,
              [curr]: areas.includes(curr),
            }),
            {},
          ),
          names: data.names.reduce(
            (acc: any, curr: string) => ({
              ...acc,
              [curr]: names.includes(curr),
            }),
            {},
          ),
          organisations: data.organisations.reduce(
            (acc: any, curr: { orgNumber: string; }) => ({
              ...acc,
              [curr.orgNumber]: organisations.includes(curr.orgNumber),
            }),
            {},
          ),
          distributors: hasDistributors ? data.distributors.reduce(
            (acc: any, curr: { orgNumber: string; }) => ({
              ...acc,
              [curr.orgNumber]: distributors.includes(curr.orgNumber),
            }),
            {},
          ) : {},
          weekdays: allWeekdays.reduce(
            (acc, curr) => ({
              ...acc,
              [curr.number]: weekdays.includes(curr.number),
            }),
            {},
          ),
          dates: hasDate ? {
            to,
            from,
          } : undefined,
          timeInterval: hasTimeInterval ? {
            from: currentTimeInterval.split('-')[0],
            to: currentTimeInterval.split('-')[1],
          } : undefined,
        });
      });
  }, []);

  // useEffect called to update url based on chosen filter(s) triggered by reload
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
      const distributors = getFilterList(FilterOptions.DISTRIBUTORS);
      const selectedDate = filters?.dates;
      const selectedTime = filters?.timeInterval;

      if (areas.length > 0) {
        params.append(FilterOptions.AREAS, areas.join(','));
      }
      if (names.length > 0) {
        params.append(FilterOptions.NAMES, names.join(','));
      }
      if (organisations.length > 0) {
        params.append(FilterOptions.ORGANISATIONS, organisations.join(','));
      }
      if (distributors.length > 0) {
        params.append(FilterOptions.DISTRIBUTORS, distributors.join(','));
      }
      if (weekdays.length > 0) {
        params.append(FilterOptions.WEEKDAYS, weekdays.join(','));
      }

      if (typeof selectedDate !== 'undefined' && selectedDate.to && selectedDate.from) {
        params.append('from', selectedDate.from);
        params.append('to', selectedDate.to);
      }

      if (typeof selectedTime !== 'undefined' && selectedTime.to && selectedTime.from) {
        const time = `${selectedTime.from}-${selectedTime.to}`;
        params.append('timeInterval', time);
      }

      // Sets filter to show active filters on filter button(s)
      setActiveFilters({
        areas: areas.length,
        organisations: organisations.length,
        names: names.length,
        weekdays: weekdays.length,
        distributors: distributors.length,
        dates: selectedDate?.to !== undefined ? 1 : 0,
        timeInterval: selectedTime?.to !== undefined ? 1 : 0,
      });

      const filter = params.toString();
      setFilterState(filter);

      // Sets URL to current filter(s) & fetches filtered data
      window.history.replaceState({}, '', `${window.location.pathname}${filter !== '' ? `?${filter}` : ''}`);
      fetchEvents(filter);
      setReload(false);
    }
  }, [filters, reload]);

  const exportEventsToExcel = () => exportEvents(filterState);

  return {
    filterOptions,
    activeFilters,
    filters,
    checkFilter,
    resetFilters,
    triggerReload,
    setDateTimeFilter,
    exportEventsToExcel,
  };
};
