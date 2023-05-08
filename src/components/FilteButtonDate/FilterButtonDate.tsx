import { FC, useRef, useState } from 'react';
import ExpandArrow from 'assets/expand_arrow_icon.svg';
import { useHandleClickOutside } from 'hooks';
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

  return (
    <Styled.Container ref={containerRef}>
      <Styled.Button type="button" outline onClick={() => setIsOpen(!isOpen)}>
        <Styled.Content>
          {label}
          <img src={ExpandArrow} alt="arrow icon" />
        </Styled.Content>
      </Styled.Button>
      {isOpen && (
        <FilterBox />
      )}
    </Styled.Container>
  );
};
