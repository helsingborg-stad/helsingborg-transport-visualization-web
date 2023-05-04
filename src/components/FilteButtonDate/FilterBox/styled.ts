import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-white);
  position: absolute;
  top: 0;
  box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.17);
  border-radius: var(--border-radius-xs);
  min-width: 174px;
  max-height: 290px;
  display: flex;
  flex-direction: column;
  z-index: 9;
`;

export const Header = styled.div`
  border-bottom: 1px solid var(--color-gray-9);
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 12px;
  justify-content: space-between;
`;

export const Today = styled.h3`
  font-size: 10px;
  line-height: 13px;
  font-weight: var(--font-weight);
`;

export const Heading = styled.h2`
  font-size: var(--font-size-body-xs);
  font-weight: var(--font-weight-700);
  line-height: var(--line-height-xs);
`;

export const FilterContainer = styled.div`
  margin: 12px 0px;
  padding: 0 var(--spacing-xs);
  overflow: scroll;
`;

export const IconWrapper = styled.img`
  cursor: pointer;
`;

export const OptionList = styled.div`
  display: flex;
  flex-direction: column;
`;
