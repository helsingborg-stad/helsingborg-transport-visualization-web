import { FilterButton, FilterButtonDate } from 'components';
import { useGetEventFilters } from 'modules/Delivery/hooks';
import * as Styled from './styled';
import { AreaFilter } from './AreaFilter';

export const FilterList = () => {
  const {
    filters, checkFilter, resetFilters, triggerReload,
  } = useGetEventFilters();

  if (!filters) {
    return null;
  }
  return (
    <Styled.Container>
      <FilterButton label="Område" clearFilter={() => resetFilters('areas')} triggerReload={triggerReload}>
        <AreaFilter areaFilter={filters.areas} checkFilter={checkFilter} />
      </FilterButton>
      <FilterButtonDate label="Datum" />
    </Styled.Container>
  );
};
