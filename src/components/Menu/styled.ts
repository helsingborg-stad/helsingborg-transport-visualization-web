import styled from 'styled-components';

export const Menu = styled.div`
  position: absolute;
  top: 24px;
  right: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Container = styled.button`
  width: fit-content;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-7);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 4px 2px 10px;
  gap: 8px;
  z-index: 9;
  border-radius: var(--border-radius-md);
`;

export const MenuList = styled.div`
  margin-top: 8px;
  margin-right: 8px;
  background: var(--color-white);
  box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.17);
  border-radius: 6px;
  width: 113px;
  z-index: 9;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 12px;
`;

export const SectionOne = styled(Section)`
  border-bottom: 1px solid var(--color-gray-8);
`;

export const SectionTwo = styled(Section)`
  border-bottom: 1px solid var(--color-gray-8);
`;

export const SectionThree = styled(Section)``;

export const Text = styled.p`
  font-size: var(--font-size-body-xs);
  line-height: var(--line-height-xxxs);
  text-decoration: none;
  cursor: pointer;
`;

export const BoldText = styled(Text)`
  font-weight: var(--font-weight-700);
`;
