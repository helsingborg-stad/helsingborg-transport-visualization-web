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
  flex-direction: row;
  gap: 4px;
`;
