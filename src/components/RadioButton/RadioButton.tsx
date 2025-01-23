import { FC } from 'react';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import * as Styled from './styled';

type RadioButtonProps = {
  label: string;
  checked: boolean;
  onClick: () => void;
};

export const RadioButton: FC<RadioButtonProps> = ({ checked, onClick, label }) => (
  <Styled.Container onClick={onClick}>
    {checked ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
    <Styled.Input type="radio" />
    <Styled.Label checked={checked}>{label}</Styled.Label>
  </Styled.Container>
);
