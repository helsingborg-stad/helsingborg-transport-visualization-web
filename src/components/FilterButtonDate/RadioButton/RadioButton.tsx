import { FC } from 'react';
import CheckIcon from 'assets/check_icon.svg';
import * as Styled from './styled';

type RadioButtonProps = {
  label: string;
  checked: boolean;
  onClick: () => void;
};

export const RadioButton: FC<RadioButtonProps> = ({ checked, onClick, label }) => (
  <Styled.Container onClick={onClick}>
    <Styled.Label checked={checked}>{label}</Styled.Label>
    <Styled.Input type="radio" />
    {checked && <img src={CheckIcon} alt="check" />}
  </Styled.Container>
);
