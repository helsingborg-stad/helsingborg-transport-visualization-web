import { Checkbox } from 'components/Checkbox';
import { CheckboxFilter, FilterOptions } from 'types';
import { FC } from 'react';
import { WeekdayWithName } from 'api/filter/types';
import * as Styled from './styled';

type WeekdayFilterProps = {
  filterOptions: WeekdayWithName[];
  weekdayFilter: CheckboxFilter;
  checkFilter: (filterName: FilterOptions.WEEKDAYS, key: string) => void
};

export const WeekdayFilter: FC<WeekdayFilterProps> = (
  { weekdayFilter, checkFilter, filterOptions },
) => {
  if (!weekdayFilter) {
    return null;
  }
  return (
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
  );
};
