import styled from 'styled-components';

export const Date = styled.input`
  ::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
`;

export const Label = styled.span`
  font-size: 10px;
  line-height: 14px;
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
`;
