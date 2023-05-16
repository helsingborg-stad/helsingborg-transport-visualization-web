import { InputTime } from 'components/InputTime';
import * as Styled from './styled';

export const FilterBox = () => (
  <Styled.Container>
    <Styled.FilterContainer>
      <Styled.OptionList>
        <InputTime label="FRÅN" />
        <span> - </span>
        <InputTime label="TILL" />
      </Styled.OptionList>
    </Styled.FilterContainer>
  </Styled.Container>
);
