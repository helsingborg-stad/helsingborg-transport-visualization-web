import { Checkbox, FilterButton } from 'components';
import { CheckboxFilter, FilterOptions } from 'types';
import { FC } from 'react';
import * as Styled from '../filter.styled';

type NameFilterProps = {
  nameFilter: CheckboxFilter;
  checkFilter: (filterName: FilterOptions.NAMES, key: string) => void;
  activeFilters: number;
  resetFilters: (filter?: FilterOptions) => void;
  triggerReload: () => void;
};

export const NameFilter: FC<NameFilterProps> = ({
  nameFilter, checkFilter, activeFilters, resetFilters, triggerReload,
}) => (
  <FilterButton
    label="Plats"
    clearFilter={() => resetFilters(FilterOptions.NAMES)}
    triggerReload={triggerReload}
    activeFilters={activeFilters}
  >
    { !nameFilter
      ? <Styled.NoValue>Finns inga värden att filtrera på för kategorin.</Styled.NoValue> : (
        <Styled.Container>
          {Object.entries(nameFilter).map(([key, value]) => (
            <div key={key}>
              <Checkbox
                id={key}
                checked={value}
                onChange={() => checkFilter(FilterOptions.NAMES, key)}
              >
                <Styled.Label>{key}</Styled.Label>
              </Checkbox>
            </div>
          ))}
        </Styled.Container>
      )}

  </FilterButton>
);
