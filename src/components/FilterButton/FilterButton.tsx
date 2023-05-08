import { FC, useRef, useState } from 'react';
import ExpandArrow from 'assets/expand_arrow_icon.svg';
import { useHandleClickOutside } from 'hooks';
import { FilterBox } from './FilterBox';

import * as Styled from './styled';

type FilterButtonProps = {
  label: string;
  children: React.ReactElement;
  clearFilter: () => void;
  triggerReload: () => void;
  activeFilters: number;
};

export const FilterButton: FC<FilterButtonProps> = ({
  label, children, clearFilter, triggerReload, activeFilters,
}) => {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useHandleClickOutside({
    ref: containerRef,
    setVisiblity: () => {
      setIsOpen(false);
    },
  });

  const close = () => {
    setIsOpen(false);
  };

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
          clearFilter={clearFilter}
          close={close}
          label={label}
          triggerReload={triggerReload}
        >
          {children}
        </FilterBox>
      )}
    </Styled.Container>
  );
};
