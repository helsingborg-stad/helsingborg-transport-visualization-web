import { FC, useRef, useState } from 'react';
import ExpandArrow from 'assets/expand_arrow_icon.svg';
import { useHandleClickOutside } from 'hooks';
import { DateFilterOption, DateFilterSelected } from 'modules/Delivery/hooks';
import { FilterBox } from './FilterBox';
import * as Styled from './styled';

type FilterButtonDateProps = {
  label: string;
  filterOptions: DateFilterOption[];
  selected?: DateFilterSelected;
  onClick: (date: DateFilterSelected) => void;
};

export const FilterButtonDate: FC<FilterButtonDateProps> = ({
  label, filterOptions, selected, onClick,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef(null);

  useHandleClickOutside({
    ref: containerRef,
    setVisiblity: () => {
      setIsOpen(false);
    },
  });

  return (
    <Styled.Container ref={containerRef}>
      <Styled.Button type="button" outline onClick={() => setIsOpen(!isOpen)}>
        <Styled.Content>
          {label}
          <img src={ExpandArrow} alt="arrow icon" />
        </Styled.Content>
      </Styled.Button>
      {isOpen && (
        <FilterBox
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
