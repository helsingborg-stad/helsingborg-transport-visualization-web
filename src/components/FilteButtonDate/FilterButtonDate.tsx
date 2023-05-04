import { FC, useRef, useState } from 'react';
import ExpandArrow from 'assets/expand_arrow_icon.svg';
import { ButtonSize } from 'components/Button/types';
import { useHandleClickOutside } from 'hooks';
import { Button } from '../Button';
import { FilterBox } from './FilterBox';
import * as Styled from './styled';

type FilterButtonDateProps = {
  label: string;
};

export const FilterButtonDate: FC<FilterButtonDateProps> = ({ label }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef(null);

  useHandleClickOutside({
    ref: containerRef,
    setVisiblity: () => {
      setIsOpen(false);
    },
  });

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
        <FilterBox />
      )}
    </Styled.Container>
  );
};
