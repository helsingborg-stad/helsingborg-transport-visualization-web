import styled from 'styled-components';
import { Button as ButtonComponent } from '../Button';

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Button = styled(ButtonComponent)`
  background-color: red;
`;
