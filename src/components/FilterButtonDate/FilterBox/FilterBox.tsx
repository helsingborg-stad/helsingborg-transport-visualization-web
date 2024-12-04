import { DateTimeFilterOption, DateTimeFilterSelected } from 'types';
import { FC } from 'react';
import { RadioButton } from '../RadioButton';
import * as Styled from './styled';

type FilterBoxProps = {
  filterOptions: DateTimeFilterOption[];
  selected?: DateTimeFilterSelected;
  onClick: (data: DateTimeFilterSelected) => void;
  close: () => void;
  label: string;
};

export const FilterBox: FC<FilterBoxProps> = ({
  filterOptions, selected, onClick, close, label,
}) => {
  const isSelected = (to?: string, from?: string) => selected?.to === to && selected?.from === from;

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Heading>
          {label}
        </Styled.Heading>
      </Styled.Header>
      <Styled.FilterContainer>
        <Styled.OptionList>
          {
            filterOptions.map((option) => (
              <RadioButton
                key={option.label}
                label={option.label}
                checked={isSelected(option.to, option.from)}
                onClick={() => {
                  onClick({ to: option.to, from: option.from });
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
