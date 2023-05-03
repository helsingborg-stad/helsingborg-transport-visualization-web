import styled from 'styled-components';

export const Container = styled.div`
  margin-top: var(--spacing-xxs);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  width: 100%;
  gap: var(--spacing-xs);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;

export const ChecboxContainer = styled.div`
  margin-top: var(--spacing-xxs);
`;

export const ButtonContainer = styled.div`
  margin-top: var(--spacing-xs);
`;

export const Label = styled.span`
  font-size: var(--font-size-body-md);
  color: var(--color-black-2);
  line-height: var(--line-height-xs);
  font-weight: var(--font-weight-400);
`;

export const Link = styled.a`
  font-size: var(--font-size-body-md);
  color: var(--color-black-2);
  line-height: var(--line-height-xs);
  font-weight: var(--font-weight-400);
  text-decoration: underline;
`;
