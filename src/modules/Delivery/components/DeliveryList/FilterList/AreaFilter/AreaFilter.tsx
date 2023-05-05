import { Checkbox } from 'components/Checkbox';
import { AreaFilterType } from 'modules/Delivery/hooks';
import { FC } from 'react';
import * as Styled from './styled';

type AreaFilterProps = {
  areaFilter: AreaFilterType;
  checkFilter: (filterName: 'organisations' | 'names' | 'areas', key: string) => void
};

export const AreaFilter: FC<AreaFilterProps> = ({ areaFilter = {}, checkFilter }) => {
  if (!areaFilter) {
    return null;
  }
  return (
    <Styled.Container>
      {Object.entries(areaFilter).map(([key, value]) => (
        <div key={key}>
          <Checkbox
            checked={value}
            onChange={() => checkFilter('areas', key)}
          >
            <Styled.Label>{key}</Styled.Label>
          </Checkbox>
        </div>
      ))}
    </Styled.Container>
  );
};
