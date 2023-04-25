import React, { FC } from 'react';
import * as Styled from './styled';

type EventProp = React.ChangeEvent<HTMLInputElement>;

type InputProps = {
  error?: string;
  label?: string;
  value: string | number;
  placeholder: string;
  onChange: (e: EventProp) => void;
  disabled?: boolean;
  id?: string;
  name?: string;
  type: string;
};

export const Input: FC<InputProps> = ({
  error, value, onChange, placeholder, id, name, disabled, label, type,
}) => (
  <div>
    <p>{label}</p>
    <Styled.Input
      error={!!error}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      id={id}
      name={`input-${name}`}
      type={type}
    />
    <p>{error}</p>
  </div>
);

Input.defaultProps = {
  error: '',
  label: '',
  disabled: false,
  id: undefined,
  name: undefined,
};
