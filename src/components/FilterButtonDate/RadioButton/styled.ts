import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

type LabelProps = {
  checked: boolean;
};

export const Label = styled.p<LabelProps>`
  color: var(--color-gray-10);
  font-size: var(--font-size-body-xs);
  line-height: var(--line-height-xxxs);

  ${({ checked }) => checked
    && css`
     color: var(--color-black);
  `}
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
