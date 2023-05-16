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
  noFilterValues?: boolean;
};

export const FilterBox: FC<FilterBoxProps> = ({
  close, label, children, clearFilter, triggerReload, noFilterValues,
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
      {
        noFilterValues
          ? (
            <Styled.ActionBar>
              <Button type="button" primary buttonSize={ButtonSize.SMALL} onClick={close}>Ok</Button>
            </Styled.ActionBar>
          )
          : (
            <Styled.ActionBar>
              <Button type="button" tertiary buttonSize={ButtonSize.SMALL} onClick={clearAndClose}>Rensa</Button>
              <Button type="button" primary buttonSize={ButtonSize.SMALL} onClick={showFilter}>Visa</Button>
            </Styled.ActionBar>
          )
      }

    </Styled.Container>
  );
};

FilterBox.defaultProps = {
  noFilterValues: false,
};
