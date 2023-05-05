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
};

export const FilterButton: FC<FilterButtonProps> = ({
  label, children, clearFilter, triggerReload,
}) => {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useHandleClickOutside({
    ref: containerRef,
    setVisiblity: () => {
      setIsOpen(false);
      clearFilter();
    },
  });

  const close = () => {
    setIsOpen(false);
    clearFilter();
  };

  // TODO: add active state for filter button (styling)!!
  return (
    <Styled.Container ref={containerRef}>
      <Button type="button" outline buttonSize={ButtonSize.SMALL} onClick={() => setIsOpen(!isOpen)}>
        <Styled.Content>
          {label}
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
