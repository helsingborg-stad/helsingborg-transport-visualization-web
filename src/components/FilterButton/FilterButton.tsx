import { FC } from 'react';
import ExpandArrow from 'assets/expand_arrow_icon.svg';
import { ButtonSize } from 'components/Button/types';
import { Button } from '../Button';
import * as Styled from './styled';

type FilterButtonProps = {
  label: string;
};

export const FilterButton: FC<FilterButtonProps> = ({ label }) => (
  <Button outline buttonSize={ButtonSize.SMALL}>
    <Styled.Content>
      {label}
      <img src={ExpandArrow} alt="arrow icon" />
    </Styled.Content>
  </Button>
);
