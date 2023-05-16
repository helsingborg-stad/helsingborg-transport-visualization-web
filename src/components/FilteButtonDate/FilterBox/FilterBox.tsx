import { useDateConverter } from 'utils/useDateConverter';
import { DateFilterOption, DateFilterSelected } from 'modules/Delivery/hooks';
import { FC } from 'react';
import { RadioButton } from '../RadioButton';
import * as Styled from './styled';

type FilterBoxProps = {
  filterOptions: DateFilterOption[];
  selected?: DateFilterSelected;
  onClick: (date: DateFilterSelected) => void;
  close: () => void;
};

export const FilterBox: FC<FilterBoxProps> = ({
  filterOptions, selected, onClick, close,
}) => {
  const { getToday } = useDateConverter();
  const today = getToday();
  const selectedOption = filterOptions
    .find(({ to, from }) => selected?.to === to && selected?.from === from);
  const isSelected = (to?: string, from?: string) => selected?.to === to && selected?.from === from;

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Heading>
          {
             selectedOption?.to ? `${selectedOption?.from} - ${selectedOption?.to}` : today
            }

        </Styled.Heading>
      </Styled.Header>
      <Styled.FilterContainer>
        <Styled.OptionList>
          {
            filterOptions.map(({ label, to, from }) => (
              <RadioButton
                key={label}
                label={label}
                checked={isSelected(to, from)}
                onClick={() => {
                  onClick({ to, from });
                  close();
                }}
              />
            ))
          }
        </Styled.OptionList>
      </Styled.FilterContainer>
    </Styled.Container>
  );
};

FilterBox.defaultProps = {
  selected: undefined,
};
