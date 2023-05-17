import {
  Button, FilterButton, FilterButtonDate,
} from 'components';
import {
  ActiveFilterType, DateTimeFilterSelected, FilterOptionType, FilterType,
} from 'modules/Delivery/hooks';
import { FilterOptions } from 'types';
import { ButtonSize } from 'components/Button/types';
import { FC } from 'react';
import * as Styled from './styled';
import { AreaFilter } from './AreaFilter';
import { NameFilter } from './NameFilter';
import { OrganisationFilter } from './OrganisationFilter';
import { DistributorFilter } from './DistributorFilter';
import { WeekdayFilter } from './WeekdayFilter';

type FilterListProps = {
  filters?: FilterType;
  filterOptions?: FilterOptionType;
  checkFilter: (filterName: FilterOptions, key: string) => void;
  resetFilters: (filter?: FilterOptions) => void;
  triggerReload: () => void;
  activeFilters: ActiveFilterType;
  setDateTimeFilter: (filterName: string) => (data: DateTimeFilterSelected) => void
};

export const FilterList: FC<FilterListProps> = ({
  filters, checkFilter, resetFilters, triggerReload,
  filterOptions,
  activeFilters, setDateTimeFilter,
}) => {
  if (!filters || !filterOptions) {
    return null;
  }

  const hasActiveFilter = Object.values(activeFilters).some((filter) => filter !== 0);

  return (
    <Styled.Container>
      <FilterButtonDate
        activeFilters={activeFilters.dates}
        label="Datum"
        filterOptions={filterOptions.dates}
        selected={filters.dates}
        onClick={setDateTimeFilter('dates')}
      />
      <FilterButton label="Dag" clearFilter={() => resetFilters(FilterOptions.WEEKDAYS)} triggerReload={triggerReload} activeFilters={activeFilters.weekdays}>
        <WeekdayFilter
          weekdayFilter={filters.weekdays}
          checkFilter={checkFilter}
          filterOptions={filterOptions.weekdays}
        />
      </FilterButton>
      <FilterButtonDate
        activeFilters={activeFilters.timeInterval}
        label="Tid"
        filterOptions={filterOptions.timeInterval}
        selected={filters.timeInterval}
        onClick={setDateTimeFilter('timeInterval')}
      />
      <FilterButton label="Plats" clearFilter={() => resetFilters(FilterOptions.NAMES)} triggerReload={triggerReload} activeFilters={activeFilters.names}>
        <NameFilter nameFilter={filters.names} checkFilter={checkFilter} />
      </FilterButton>
      <FilterButton label="Område" clearFilter={() => resetFilters(FilterOptions.AREAS)} triggerReload={triggerReload} activeFilters={activeFilters.areas}>
        <AreaFilter areaFilter={filters.areas} checkFilter={checkFilter} />
      </FilterButton>

      <FilterButton
        noFilterValues={!filterOptions.distributors || !filters.distributors}
        label="Leverantör"
        clearFilter={() => resetFilters(FilterOptions.DISTRIBUTORS)}
        triggerReload={triggerReload}
        activeFilters={activeFilters.distributors}
      >
        <DistributorFilter
          filterOptions={filterOptions.distributors}
          distributorFilter={filters.distributors}
          checkFilter={checkFilter}
        />
      </FilterButton>
      <FilterButton label="Transportör" clearFilter={() => resetFilters(FilterOptions.ORGANISATIONS)} triggerReload={triggerReload} activeFilters={activeFilters.organisations}>
        <OrganisationFilter
          filterOptions={filterOptions.organisations}
          organisationFilter={filters.organisations}
          checkFilter={checkFilter}
        />
      </FilterButton>
      {
        hasActiveFilter && <Button type="button" buttonSize={ButtonSize.SMALL} onClick={() => resetFilters()}>Rensa alla</Button>
      }

    </Styled.Container>
  );
};

FilterList.defaultProps = {
  filters: undefined,
  filterOptions: undefined,
};
