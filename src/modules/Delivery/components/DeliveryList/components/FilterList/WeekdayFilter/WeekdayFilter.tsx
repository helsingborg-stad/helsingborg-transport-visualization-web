import { Checkbox, FilterButton } from 'components';
import { CheckboxFilter, FilterOptions, WeekdayWithName } from 'types';
import { FC } from 'react';
import * as Styled from '../filter.styled';

type WeekdayFilterProps = {
  filterOptions: WeekdayWithName[];
  weekdayFilter: CheckboxFilter;
  checkFilter: (filterName: FilterOptions.WEEKDAYS, key: string) => void;
  resetFilters: (filter?: FilterOptions) => void;
  triggerReload: () => void;
  activeFilters: number;
};

export const WeekdayFilter: FC<WeekdayFilterProps> = (
  {
    weekdayFilter, checkFilter, filterOptions, resetFilters, triggerReload, activeFilters,
  },
) => (
  <FilterButton
    label="Dag"
    clearFilter={() => resetFilters(FilterOptions.WEEKDAYS)}
    triggerReload={triggerReload}
    activeFilters={activeFilters}
  >
    {!weekdayFilter
      ? <Styled.NoValue>Finns inga värden att filtrera på för kategorin.</Styled.NoValue> : (
        <Styled.Container>
          {filterOptions.map(({ day, number }) => (
            <div key={number}>
              <Checkbox
                id={number}
                checked={weekdayFilter[number]}
                onChange={() => checkFilter(FilterOptions.WEEKDAYS, number)}
              >
                <Styled.Label>{day}</Styled.Label>
              </Checkbox>
            </div>
          ))}
        </Styled.Container>
      )}

  </FilterButton>
);
