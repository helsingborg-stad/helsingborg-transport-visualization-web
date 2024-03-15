import { Checkbox } from 'components/Checkbox';
import { CheckboxFilter, FilterOptions } from 'types';
import { FC } from 'react';
import { FilterButton } from 'components';
import * as Styled from '../filter.styled';

type AreaFilterProps = {
  areaFilter: CheckboxFilter;
  checkFilter: (filterName: FilterOptions.AREAS, key: string) => void;
  resetFilters: (filter?: FilterOptions) => void;
  triggerReload: () => void;
  activeFilters: number;
};

export const AreaFilter: FC<AreaFilterProps> = ({
  areaFilter, checkFilter, resetFilters, triggerReload, activeFilters,
}) => (
  <FilterButton
    label="Område"
    clearFilter={() => resetFilters(FilterOptions.AREAS)}
    triggerReload={triggerReload}
    activeFilters={activeFilters}
  >
    {
        !areaFilter
          ? <Styled.NoValue>Finns inga värden att filtrera på för kategorin.</Styled.NoValue> : (
            <Styled.Container>
              {Object.entries(areaFilter).map(([key, value]) => (
                <div key={key}>
                  <Checkbox
                    id={key}
                    checked={value}
                    onChange={() => checkFilter(FilterOptions.AREAS, key)}
                  >
                    <Styled.Label>{key}</Styled.Label>
                  </Checkbox>
                </div>
              ))}
            </Styled.Container>
          )
      }

  </FilterButton>
);
