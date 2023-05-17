import { Checkbox, FilterButton } from 'components';
import { CheckboxFilter, FilterOptions, OrgWithName } from 'types';
import { FC } from 'react';
import * as Styled from '../filter.styled';

type OrgFilterProps = {
  filterOptions: OrgWithName[];
  organisationFilter: CheckboxFilter;
  checkFilter: (filterName: FilterOptions.ORGANISATIONS, key: string) => void;
  resetFilters: (filter?: FilterOptions) => void;
  triggerReload: () => void;
  activeFilters: number;
};

export const OrganisationFilter: FC<OrgFilterProps> = ({
  filterOptions, organisationFilter, checkFilter, resetFilters, triggerReload, activeFilters,
}) => {
  const noFilterValues = !filterOptions || filterOptions.length <= 0;
  return (
    <FilterButton
      label="Transportör"
      clearFilter={() => resetFilters(FilterOptions.ORGANISATIONS)}
      triggerReload={triggerReload}
      activeFilters={activeFilters}
    >
      {
        noFilterValues
          ? <Styled.NoValue>Finns inga värden att filtrera på för kategorin.</Styled.NoValue> : (
            <Styled.Container>
              {filterOptions.map(({ name, orgNumber }) => (
                <div key={orgNumber}>
                  <Checkbox
                    id={orgNumber}
                    checked={organisationFilter[orgNumber]}
                    onChange={() => checkFilter(FilterOptions.ORGANISATIONS, orgNumber)}
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
