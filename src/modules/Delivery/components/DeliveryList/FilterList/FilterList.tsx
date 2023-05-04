import { FilterButton, FilterButtonDate } from 'components';
import { useGetEventFilters } from 'modules/Delivery/hooks';
import * as Styled from './styled';
import { AreaFilter } from './AreaFilter';

export const FilterList = () => {
  const { areaFilter, setAreaFilter, clearAreaFilters } = useGetEventFilters();

  return (
    <Styled.Container>
      <FilterButton label="Område" clearFilter={clearAreaFilters}>
        <AreaFilter areaFilter={areaFilter} setAreaFilter={setAreaFilter} />
      </FilterButton>
      <FilterButtonDate label="Datum" />
    </Styled.Container>
  );
};
