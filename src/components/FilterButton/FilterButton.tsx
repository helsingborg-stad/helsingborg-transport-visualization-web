import { FC, useRef, useState } from 'react';
import ExpandArrow from 'assets/expand_arrow_icon.svg';
import { ButtonSize } from 'components/Button/types';
import { useHandleClickOutside } from 'hooks';
import { Button } from '../Button';
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
      <Button type="button" outline={!isActive} isActive={isActive} buttonSize={ButtonSize.SMALL} onClick={() => setIsOpen(!isOpen)}>
        <Styled.Content>
          {label}
          {activeFilters > 0 ? ` (${activeFilters})` : ''}
          <img src={ExpandArrow} alt="arrow icon" />
        </Styled.Content>
      </Button>
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
