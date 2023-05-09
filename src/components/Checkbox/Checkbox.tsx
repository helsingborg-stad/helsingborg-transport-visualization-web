import { FC } from 'react';
import * as Styled from './styled';

type CheckboxProps = {
  id: string;
  children: React.ReactElement;
  checked: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (checked: boolean) => void;
  error?: string;
};

export const Checkbox: FC<CheckboxProps> = ({
  children, checked, onChange, error, id,
}) => (
  <>
    <Styled.Container>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      {children}
    </Styled.Container>
    <Styled.ErrorText>{error}</Styled.ErrorText>
  </>
);

Checkbox.defaultProps = {
  error: '',
};
