import { FC } from 'react';
import * as Styled from './styled';

type CheckboxProps = {
  label: string;
  checked: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (checked: boolean) => void;
  error?: string;
};

export const Checkbox: FC<CheckboxProps> = ({
  label, checked, onChange, error,
}) => (
  <>
    <Styled.Container>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      <Styled.Label>{label}</Styled.Label>
    </Styled.Container>
    <Styled.ErrorText>{error}</Styled.ErrorText>
  </>
);

Checkbox.defaultProps = {
  error: '',
};
