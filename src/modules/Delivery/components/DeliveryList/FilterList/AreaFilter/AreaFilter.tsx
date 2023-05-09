import { Checkbox } from 'components/Checkbox';
import { CheckboxFilter, FilterOptions } from 'types';
import { FC } from 'react';
import * as Styled from './styled';

type AreaFilterProps = {
  areaFilter: CheckboxFilter;
  checkFilter: (filterName: FilterOptions.AREAS, key: string) => void
};

export const AreaFilter: FC<AreaFilterProps> = ({ areaFilter, checkFilter }) => {
  if (!areaFilter) {
    return null;
  }
  return (
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
  );
};
