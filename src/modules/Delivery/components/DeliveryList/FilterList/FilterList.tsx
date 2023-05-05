import { FilterButton } from 'components';
import { useGetEventFilters } from 'modules/Delivery/hooks';
import { FilterOptions } from 'types';
import * as Styled from './styled';
import { AreaFilter } from './AreaFilter';
import { NameFilter } from './NameFilter';

export const FilterList = () => {
  const {
    filters, checkFilter, resetFilters, triggerReload,
  } = useGetEventFilters();

  if (!filters) {
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
    </Styled.Container>
  );
};
