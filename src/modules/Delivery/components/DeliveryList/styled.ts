import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
`;

export const ErrorContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 53px;
  margin-top: 250px;
`;

export const ErrorText = styled.div`
  font-size: var(--font-size-body-lg);
  line-height: var(--line-height-sm);
  font-weight: var(--font-weight-500);
`;

export const ErrorButtonContainer = styled.div`
width: 193px;
`;
