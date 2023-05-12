import { FC } from 'react';
import * as Styled from './styled';

// type EventProp = React.ChangeEvent<HTMLInputElement>;

type InputTimeProps = {
  label?: string;
};

export const InputTime: FC<InputTimeProps> = ({ label }) => (
  <Styled.Container>
    <Styled.Label>{label}</Styled.Label>
    <Styled.Date
      type="time"
    />
  </Styled.Container>
);

InputTime.defaultProps = {
  label: '',
};
