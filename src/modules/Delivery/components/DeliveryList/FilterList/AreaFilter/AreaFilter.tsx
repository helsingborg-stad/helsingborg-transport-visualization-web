import { Checkbox } from 'components/Checkbox';
import { AreaFilter as AreaFilterType } from 'modules/Delivery/hooks';
import { FC } from 'react';
import * as Styled from './styled';

type AreaFilterProps = {
  areaFilter: AreaFilterType;
  setAreaFilter: React.Dispatch<React.SetStateAction<AreaFilterType>>;
};

export const AreaFilter: FC<AreaFilterProps> = ({ areaFilter, setAreaFilter }) => {
  if (!areaFilter) {
    return null;
  }
  return (
    <Styled.Container>
      {Object.entries(areaFilter).map(([key, value]) => (
        <div key={key}>
          <Checkbox
            checked={value}
            onChange={() => setAreaFilter((prev) => ({
              ...prev,
              [key as keyof typeof areaFilter]: !prev[
                key as keyof typeof areaFilter
              ],
            }))}
          >
            <Styled.Label>{key}</Styled.Label>
          </Checkbox>
        </div>
      ))}
    </Styled.Container>
  );
};
