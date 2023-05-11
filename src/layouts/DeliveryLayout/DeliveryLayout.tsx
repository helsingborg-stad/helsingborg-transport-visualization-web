import { FC } from 'react';
import { Menu } from 'components/Menu';

type DeliveryLayoutProps = {
  children: React.ReactNode;
  showMenu?: boolean;

};

export const DeliveryLayout: FC<DeliveryLayoutProps> = ({ children, showMenu = true }) => (
  <>
    {showMenu && <Menu />}
    {children}
  </>

);

DeliveryLayout.defaultProps = {
  showMenu: true,
};
