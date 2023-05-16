import { Checkbox } from 'components/Checkbox';
import { CheckboxFilter, FilterOptions } from 'types';
import { FC } from 'react';
import { OrgWithName } from 'api/filter/types';
import * as Styled from './styled';

type DistributorFilterProps = {
  filterOptions: OrgWithName[];
  distributorFilter: CheckboxFilter;
  checkFilter: (filterName: FilterOptions.DISTRIBUTORS, key: string) => void
};

export const DistributorFilter: FC<DistributorFilterProps> = ({
  filterOptions, distributorFilter, checkFilter,
}) => {
  if (!distributorFilter || !filterOptions) {
    return <Styled.NoValue>Finns inga värden att filtrera på för kategorin.</Styled.NoValue>;
  }

  return (
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
  );
};
