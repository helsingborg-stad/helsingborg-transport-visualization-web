import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #FFFFFF;
  align-items: center;
  max-width: 480px;
  margin: 90px auto;
  padding: 30px;
`;

export const Heading = styled.h1`
  font-weight: 800;
  font-size: 36px;
  line-height: 46px;
`;

export const InfoText = styled.span`
  font-size: 21px;
  line-height: 36px;
  margin-bottom: 40px;
`;

export const Link = styled.a`
  font-size: 21px;
  line-height: 36px;
  color: #ABABAB;
  cursor: pointer;
  `;

export const CreateAccountText = styled.span`
  font-size: 18px;
  line-height: 24px;
  margin-top: 44px;
`;
