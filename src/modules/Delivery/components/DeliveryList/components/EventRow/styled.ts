import { TableGrid } from 'modules/Delivery/layouts';
import styled, { keyframes } from 'styled-components';

export const Container = styled(TableGrid)`
  padding: var(--spacing-xxs) 0;
`;

export const SmallLabel = styled.p`
  color: var(--color-gray-5);
  font-size: var(--font-size-body-xxs);
  line-height: 12px;
  font-weight: var(--font-weight-400);
`;

export const Column = styled.div`
  display: flex;
  font-size: var(--font-size-body-xs);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-xxxs);
  margin: auto 0;
`;

export const PlaceColumn = styled(Column)`
  flex-direction: column;
`;
export const TypeColumn = styled(Column)`
  cursor: pointer;
  position: relative;`;
export const CarrierColumn = styled(Column)`
  cursor: pointer;
  position: relative;
`;

export const SVGContainer = styled.img`
  width: 16px;
  height: 16px;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const InfoBox = styled.div`
  background-color: var(--color-white);
  flex-direction: column;
  gap: 3px;
  padding: 12px 16px;
  border-radius: 25px 25px 25px 0px;
  box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.17);
  min-width: 150px;
  z-index: 9;
  width: fit-content;
  position: absolute;
  bottom: 24px;
  left: 24px;
  opacity: 0;
  display: none;
  animation: ${fadeIn} 0.3s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  
  ${CarrierColumn}:hover & {
    display: flex;
  }
`;

export const InfoHeader = styled.h3`
  font-weight: var(--font-weight-800);
  font-size: var(--font-size-body-xs);
  line-height: var(--line-height-xxxs);
`;

export const InfoText = styled.p`
  font-size: 9px;
  line-height: 12px;
  font-weight: var(--font-weight-300);
`;

export const IconInfo = styled.div`
  background-color: var(--color-white);
  flex-direction: column;
  gap: 3px;
  padding: 12px 16px;
  border-radius: 25px 25px 25px 0px;
  box-shadow: 0px 1px 11px rgba(0, 0, 0, 0.17);
  z-index: 9;
  width: fit-content;
  position: absolute;
  bottom: 18px;
  left: 18px;
  opacity: 0;
  display: none;
  animation: ${fadeIn} 0.3s ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  
  ${TypeColumn}:hover & {
    display: flex;
  }
`;
