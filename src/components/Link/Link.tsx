import { FC } from 'react';
import * as Styled from './styled';

type LinkProps = {
  label: string;
  href: string;
};

export const Link: FC<LinkProps> = ({ label, href }) => (
  <Styled.Link href={href}>{label}</Styled.Link>
);
