import CloseIcon from 'assets/close_icon.svg';
import { Button } from 'components';
import { ButtonSize } from 'components/Button/types';
import { FC } from 'react';
import * as Styled from './styled';

type FilterBoxProps = {
  clearFilter: () => void;
  close: () => void;
  label: string;
  children: React.ReactElement;
};

// TODO: add on click for Visa button in action bar
export const FilterBox: FC<FilterBoxProps> = ({
  close, label, children, clearFilter,
}) => (
  <Styled.Container>
    <Styled.Header>
      <Styled.Heading>{label}</Styled.Heading>
      <Styled.IconWrapper src={CloseIcon} alt="close" onClick={close} />
    </Styled.Header>
    <Styled.FilterContainer>
      {children}
    </Styled.FilterContainer>
    <Styled.ActionBar>
      <Button tertiary buttonSize={ButtonSize.SMALL} onClick={clearFilter}>Rensa</Button>
      <Button primary buttonSize={ButtonSize.SMALL} onClick={() => null}>Visa</Button>
    </Styled.ActionBar>
  </Styled.Container>
);
