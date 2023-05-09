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
  triggerReload: () => void;
};

export const FilterBox: FC<FilterBoxProps> = ({
  close, label, children, clearFilter, triggerReload,
}) => {
  const showFilter = () => {
    triggerReload();
    close();
  };

  const clearAndClose = () => {
    clearFilter();
    close();
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Heading>{label}</Styled.Heading>
        <Styled.IconWrapper src={CloseIcon} alt="close" onClick={close} />
      </Styled.Header>
      <Styled.FilterContainer>
        {children}
      </Styled.FilterContainer>
      <Styled.ActionBar>
        <Button tertiary buttonSize={ButtonSize.SMALL} onClick={clearAndClose}>Rensa</Button>
        <Button primary buttonSize={ButtonSize.SMALL} onClick={showFilter}>Visa</Button>
      </Styled.ActionBar>
    </Styled.Container>
  );
};
