import styled from 'styled-components';

export const Label = styled.p`
  font-size: var(--font-size-body-md);
  color: var(--color-black-2);
  line-height: var(--line-height-xs);
  font-weight: var(--font-weight-400);
  margin-bottom: var(--spacing-xxs);
`;

export const ToggleLabel = styled.p`
  font-size: var(--font-size-body-sm);
  color: var(--color-black-4);
  line-height: var(--line-height-xs);
  font-weight: var(--font-weight-700);
  margin-bottom: var(--spacing-xxs);
  text-decoration-line: underline;
    cursor: pointer;
`;

export const SplitContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: var(--spacing-xxs);
`;

export const InputText = styled.p`
  font-size: var(--font-size-body-lg);
  color: var(--color-gray-11);
  line-height: var(--line-height-sm);
  font-weight: var(--font-weight-400);
`;

export const Container = styled.div`
    margin-bottom: var(--spacing-xxs);
    border-bottom: 1px solid var(--color-gray-12);
    padding-bottom: var(--spacing-xs);
`;
