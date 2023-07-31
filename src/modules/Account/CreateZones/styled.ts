import styled from 'styled-components';

export const ContentContainer = styled.div`
  padding: 36px 32px;
  padding-bottom: 64px;
`;

export const FormContainer = styled.div`
  width: 600px;
  margin: 24px auto 32px;
  @media (max-width: 768px) {
    width: 450px;
  }
`;

export const Header = styled.h1`
  font-size: var(--font-size-heading-xs);
  font-weight: var(--font-weight-800);
  line-height: var(--line-height-xxxl);
  margin-bottom: var(--spacing-xxs);
  font-family: var(--font-family);
`;
