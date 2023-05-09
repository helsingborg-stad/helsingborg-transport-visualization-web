import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: var(--color-white);
  align-items: center;
  padding: var(--spacing-md);
`;

export const Heading = styled.h1`
  font-weight: var(--font-weight-800);
  font-size: var(--font-size-heading-xxl);
  line-height: var(--line-height-xxl);
`;

export const InfoText = styled.span`
  font-size: var(--font-size-body-xl);
  line-height: var(--line-height-lg);
  margin-bottom: var(--spacing-lg);
`;

export const Link = styled.a`
  font-size: var(--font-size-body-xl);
  line-height: var(--line-height-lg);
  color: var(--color-gray-2);
  cursor: pointer;
  `;

export const CreateAccountText = styled.span`
  font-size: var(--font-size-body-lg);
  line-height: var(--line-height-sm);
  margin-top: var(--spacing-xl);
`;
