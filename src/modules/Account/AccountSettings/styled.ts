import styled from 'styled-components';

export const ContentContainer = styled.div`
  padding: 36px 32px;
  padding-bottom: 64px;
`;

export const FormContainer = styled.div`
  width: 450px;
  margin: 24px auto 32px;
`;

export const Container = styled.div`
  margin: 20px 32px;
`;

export const Heading = styled.h1`
    font-size: var(--font-size-heading-sm);
    color: var(--color-black);
    line-height: var(--spacing-md);
    font-weight: var(--font-weight-700);
`;

export const ButtonContent = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 18px;
  right: 22px;
  z-index: 9;
`;
