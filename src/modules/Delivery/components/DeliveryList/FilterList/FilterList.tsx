import { FilterButton } from 'components';
import { useGetEventFilters } from 'modules/Delivery/hooks';
import { FilterOptions } from 'types';
import * as Styled from './styled';
import { AreaFilter } from './AreaFilter';
import { NameFilter } from './NameFilter';
import { OrganisationFilter } from './OrganisationFilter';

export const FilterList = () => {
  const {
    filters, checkFilter, resetFilters, triggerReload, filterOptions,
  } = useGetEventFilters();

  if (!filters || !filterOptions) {
    return null;
  }
  return (
    <Styled.Container>
      <FilterButton label="Plats" clearFilter={() => resetFilters(FilterOptions.NAMES)} triggerReload={triggerReload}>
        <NameFilter nameFilter={filters.names} checkFilter={checkFilter} />
      </FilterButton>
      <FilterButton label="Område" clearFilter={() => resetFilters(FilterOptions.AREAS)} triggerReload={triggerReload}>
        <AreaFilter areaFilter={filters.areas} checkFilter={checkFilter} />
      </FilterButton>
      <FilterButton label="Transportör" clearFilter={() => resetFilters(FilterOptions.ORGANISATIONS)} triggerReload={triggerReload}>
        <OrganisationFilter
          filterOptions={filterOptions.organisations}
          organisationFilter={filters.organisations}
          checkFilter={checkFilter}
        />
      </FilterButton>
    </Styled.Container>
  );
};
