import { FC } from 'react';
import * as Styled from './styled';

type LinkProps = {
  label: string;
  href: string;
  download?: string | null;
};

export const Link: FC<LinkProps> = ({ label, href, download }) => (
  <Styled.Link href={href} download={download}>{label}</Styled.Link>
);

Link.defaultProps = {
  download: null,
};
