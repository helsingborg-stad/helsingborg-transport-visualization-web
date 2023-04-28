import { FC } from 'react';
import * as Styled from './styled';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => (
  <Styled.ContentContainer>
    {children}
  </Styled.ContentContainer>

);
