import { Button, FilterButton } from 'components';
import { useGetEventFilters } from 'modules/Delivery/hooks';
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
  fetchEvents: (filter?: string) => void;
};

export const FilterList: FC<FilterListProps> = ({ fetchEvents }) => {
  const {
    filters, checkFilter, resetFilters, triggerReload, filterOptions, activeFilters,
  } = useGetEventFilters({ fetchEvents });

  if (!filters || !filterOptions) {
    return null;
  }

  return (
    <Styled.Container>
      <FilterButton label="Dag" clearFilter={() => resetFilters(FilterOptions.WEEKDAYS)} triggerReload={triggerReload} activeFilters={activeFilters.weekdays}>
        <WeekdayFilter
          weekdayFilter={filters.weekdays}
          checkFilter={checkFilter}
          filterOptions={filterOptions.weekdays}
        />
      </FilterButton>
      <FilterButton label="Plats" clearFilter={() => resetFilters(FilterOptions.NAMES)} triggerReload={triggerReload} activeFilters={activeFilters.names}>
        <NameFilter nameFilter={filters.names} checkFilter={checkFilter} />
      </FilterButton>
      <FilterButton label="Område" clearFilter={() => resetFilters(FilterOptions.AREAS)} triggerReload={triggerReload} activeFilters={activeFilters.areas}>
        <AreaFilter areaFilter={filters.areas} checkFilter={checkFilter} />
      </FilterButton>
      {
        filterOptions.distributors && (
        <FilterButton label="Leverantör" clearFilter={() => resetFilters(FilterOptions.DISTRIBUTORS)} triggerReload={triggerReload} activeFilters={activeFilters.distributors}>
          <DistributorFilter
            filterOptions={filterOptions.distributors}
            distributorFilter={filters.distributors}
            checkFilter={checkFilter}
          />
        </FilterButton>
        )
      }
      <FilterButton label="Transportör" clearFilter={() => resetFilters(FilterOptions.ORGANISATIONS)} triggerReload={triggerReload} activeFilters={activeFilters.organisations}>
        <OrganisationFilter
          filterOptions={filterOptions.organisations}
          organisationFilter={filters.organisations}
          checkFilter={checkFilter}
        />
      </FilterButton>
      <Button type="button" buttonSize={ButtonSize.SMALL} onClick={() => resetFilters()}>Rensa alla</Button>
    </Styled.Container>
  );
};
