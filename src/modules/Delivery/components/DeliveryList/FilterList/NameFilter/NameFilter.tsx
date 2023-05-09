import { Checkbox } from 'components/Checkbox';
import { CheckboxFilter, FilterOptions } from 'types';
import { FC } from 'react';
import * as Styled from './styled';

type NameFilterProps = {
  nameFilter: CheckboxFilter;
  checkFilter: (filterName: FilterOptions.NAMES, key: string) => void
};

export const NameFilter: FC<NameFilterProps> = ({ nameFilter, checkFilter }) => {
  if (!nameFilter) {
    return null;
  }
  return (
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
  );
};
