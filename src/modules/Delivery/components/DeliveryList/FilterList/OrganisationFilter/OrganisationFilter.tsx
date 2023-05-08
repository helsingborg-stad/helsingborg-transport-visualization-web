import { Checkbox } from 'components/Checkbox';
import { CheckboxFilter, FilterOptions } from 'types';
import { FC } from 'react';
import * as Styled from './styled';

type OrgFilterProps = {
  organisationFilter: CheckboxFilter;
  checkFilter: (filterName: FilterOptions.ORGANISATIONS, key: string) => void
};

export const OrganisationFilter: FC<OrgFilterProps> = ({ organisationFilter, checkFilter }) => {
  if (!organisationFilter) {
    return null;
  }
  return (
    <Styled.Container>
      {Object.entries(organisationFilter).map(([key, value]) => (
        <div key={key}>
          <Checkbox
            id={key}
            checked={value}
            onChange={() => checkFilter(FilterOptions.ORGANISATIONS, key)}
          >
            <Styled.Label>{key}</Styled.Label>
          </Checkbox>
        </div>
      ))}
    </Styled.Container>
  );
};
