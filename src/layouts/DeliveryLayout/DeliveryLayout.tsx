import { FC } from 'react';
import { Menu } from 'components/Menu';

type DeliveryLayoutProps = {
  children: React.ReactNode;

};

export const DeliveryLayout: FC<DeliveryLayoutProps> = ({ children }) => (
  <>
    <Menu />
    {children}
  </>

);
