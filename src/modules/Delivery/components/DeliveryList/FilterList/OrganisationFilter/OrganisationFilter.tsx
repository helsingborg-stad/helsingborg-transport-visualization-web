import { Checkbox } from 'components/Checkbox';
import { CheckboxFilter, FilterOptions } from 'types';
import { FC } from 'react';
import { OrgWithName } from 'api/filter/types';
import * as Styled from './styled';

type OrgFilterProps = {
  filterOptions: OrgWithName[];
  organisationFilter: CheckboxFilter;
  checkFilter: (filterName: FilterOptions.ORGANISATIONS, key: string) => void
};

export const OrganisationFilter: FC<OrgFilterProps> = ({
  filterOptions, organisationFilter, checkFilter,
}) => {
  if (!organisationFilter || !filterOptions) {
    return null;
  }

  return (
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
  );
};
