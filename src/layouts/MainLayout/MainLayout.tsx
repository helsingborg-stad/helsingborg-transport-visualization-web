import { FC } from 'react';
import * as Styled from './styled';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <Styled.Container>
    {children}
  </Styled.Container>
);
