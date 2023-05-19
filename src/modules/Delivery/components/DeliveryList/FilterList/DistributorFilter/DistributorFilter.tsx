import { Checkbox } from 'components/Checkbox';
import { CheckboxFilter, FilterOptions, OrgWithName } from 'types';
import { FC } from 'react';
import { FilterButton } from 'components';
import * as Styled from '../filter.styled';

type DistributorFilterProps = {
  filterOptions: OrgWithName[];
  distributorFilter: CheckboxFilter;
  checkFilter: (filterName: FilterOptions.DISTRIBUTORS, key: string) => void;
  resetFilters: (filter?: FilterOptions) => void;
  triggerReload: () => void;
  activeFilters: number;
};

export const DistributorFilter: FC<DistributorFilterProps> = ({
  filterOptions, distributorFilter, checkFilter, resetFilters, triggerReload, activeFilters,
}) => {
  const noFilterValues = !distributorFilter || filterOptions.length <= 0;

  return (
    <FilterButton
      noFilterValues={noFilterValues}
      label="Leverantör"
      clearFilter={() => resetFilters(FilterOptions.DISTRIBUTORS)}
      triggerReload={triggerReload}
      activeFilters={activeFilters}
    >
      {
        noFilterValues
          ? <Styled.NoValue>Finns inga värden att filtrera på för kategorin.</Styled.NoValue>
          : (
            <Styled.Container>
              {filterOptions.map(({ name, orgNumber }) => (
                <div key={orgNumber}>
                  <Checkbox
                    id={orgNumber}
                    checked={distributorFilter[orgNumber]}
                    onChange={() => checkFilter(FilterOptions.DISTRIBUTORS, orgNumber)}
                  >
                    <Styled.Label>{name}</Styled.Label>
                  </Checkbox>
                </div>
              ))}
            </Styled.Container>
          )
      }
    </FilterButton>
  );
};
