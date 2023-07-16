import React, { FC } from 'react';
import * as Styled from './styled';

type EventProp = React.ChangeEvent<HTMLSelectElement>;

type SelectProps = {
  error?: string;
  label?: string;
  value: string | number;
  onChange: (e: EventProp) => void;
  disabled?: boolean;
  id?: string;
  name?: string;
  info?: string;
  children: React.ReactNode;
};

export const Select: FC<SelectProps> = ({
  error, value, onChange, id, name, disabled, label, info, children,
}) => (
  <div>
    <Styled.Label>{label}</Styled.Label>
    <Styled.Select
      error={!!error}
      value={value}
      onChange={onChange}
      disabled={disabled}
      id={id}
      name={`input-${name}`}
    >
      {children}
    </Styled.Select>
    <Styled.ErrorText>{error}</Styled.ErrorText>
    <Styled.Info>{info}</Styled.Info>
  </div>
);

Select.defaultProps = {
  error: '',
  label: '',
  disabled: false,
  id: undefined,
  name: undefined,
  info: '',
};
