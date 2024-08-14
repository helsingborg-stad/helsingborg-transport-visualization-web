import styled from 'styled-components';

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isFocused) {
    return '#2196f3';
  }
  return '#eeeeee';
};

export const ContentContainer = styled.div`
    margin-top: var(--spacing-xxs);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    width: 100%;
    gap: var(--spacing-xs);
`;

export const DropArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

export const SplitContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: var(--spacing-xs);
    width: 100%;
    margin-bottom: var(--spacing-xxs);
    border-bottom: 1px solid var(--color-gray-12);
    padding-bottom: var(--spacing-xs);
`;

export const MapContainer = styled.div`
    width: 45%;
    height: 375px;
`;

export const InputContainer = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xxxs);
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: var(--spacing-xs);
    gap: var(--spacing-xs);
`;

export const ErrorText = styled.p`
  font-size: var(--font-size-body-xs);
  color: var(--color-red-1);
  line-height: var(--line-height-xxs);
  font-weight: var(--font-weight-500);
  margin-top: 10px;
`;

export const List = styled.ul`
  list-style: none;
  margin-bottom: var(--spacing-xxs);
  width: 321px;
  @media (max-width: 768px) {
    width: 238px;
  }
  position: absolute;
  background-color: var(--color-white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: var(--spacing-xxs);
  padding-bottom: 0;
  border-radius: var(--border-radius-sm);
`;

export const ListItem = styled.li`
  border-bottom: 1px solid var(--color-gray-12);
  cursor: pointer;
  margin-bottom: var(--spacing-xxs);
  &:hover {
    color: var(--color-gray-2);
    transition: color 0.2s ease-in-out;
  }
  &:last-child {
    border-bottom: none;
  }
  `;
