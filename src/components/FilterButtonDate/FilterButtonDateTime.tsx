import { FC, useRef, useState } from 'react';
import ExpandArrow from 'assets/expand_arrow_icon.svg';
import { useHandleClickOutside } from 'hooks';
import { DateTimeFilterOption, DateTimeFilterSelected } from 'types';
import { FilterBox } from './FilterBox';
import * as Styled from './styled';

type FilterButtonDateProps = {
  label: string;
  filterOptions: DateTimeFilterOption[];
  selected?: DateTimeFilterSelected;
  onClick: (data: DateTimeFilterSelected) => void;
  activeFilters: number;
};

export const FilterButtonDate: FC<FilterButtonDateProps> = ({
  label, filterOptions, selected, onClick, activeFilters,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef(null);

  useHandleClickOutside({
    ref: containerRef,
    setVisiblity: () => {
      setIsOpen(false);
    },
  });

  const isActive = activeFilters > 0;

  return (
    <Styled.Container ref={containerRef}>
      <Styled.Button type="button" outline={!isActive} isActive={isActive} onClick={() => setIsOpen(!isOpen)}>
        <Styled.Content>
          {label}
          {activeFilters > 0 ? ` (${activeFilters})` : ''}
          <img src={ExpandArrow} alt="arrow icon" />
        </Styled.Content>
      </Styled.Button>
      {isOpen && (
        <FilterBox
          label={label}
          filterOptions={filterOptions}
          selected={selected}
          onClick={onClick}
          close={() => setIsOpen(!isOpen)}
        />
      )}
    </Styled.Container>
  );
};

FilterButtonDate.defaultProps = {
  selected: undefined,
};
