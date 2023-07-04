import styled from 'styled-components';

export const SideBarContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxs);
  margin-top: var(--spacing-xl);
  @media (max-width: 768px) {
    display: none;
  }
`;

const Link = styled.a`
    font-size: var(--font-size-body-md);
    color: var(--color-gray-10);
    line-height: var(--line-height-xs);
    font-weight: var(--font-weight-400);
    text-decoration: none;
    &:hover {
        color: var(--color-black);
    }
`;

export type LinkProps = {
  isActive: boolean;
} & React.HTMLProps<HTMLLinkElement>;

export const SideBarLink = styled(Link)<LinkProps>`
    color: ${({ isActive }) => (isActive ? 'var(--color-black)' : 'var(--color-gray-10)')};
`;
