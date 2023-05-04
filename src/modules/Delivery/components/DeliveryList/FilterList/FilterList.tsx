import { FilterButton, FilterButtonDate } from 'components';
import { useGetFilters } from 'modules/Delivery/hooks';
import * as Styled from './styled';
import { AreaFilter } from './AreaFilter';

export const FilterList = () => {
  const { areaFilter, setAreaFilter, clearAreaFilters } = useGetFilters();

  return (
    <Styled.Container>
      <FilterButton label="Plats" clearFilter={clearAreaFilters}>
        <AreaFilter areaFilter={areaFilter} setAreaFilter={setAreaFilter} />
      </FilterButton>
      <FilterButtonDate label="Datum" />
    </Styled.Container>
  );
};
