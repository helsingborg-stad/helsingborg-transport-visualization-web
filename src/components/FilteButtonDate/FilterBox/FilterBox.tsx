import { useDateConverter } from 'utils/useDateConverter';
import * as Styled from './styled';

export const FilterBox = () => {
  const { getToday } = useDateConverter();
  const today = getToday();

  return (
    <Styled.Container>
      <Styled.Header>
        <div>
          <Styled.Today>IDAG</Styled.Today>
          <Styled.Heading>{today}</Styled.Heading>
        </div>
      </Styled.Header>
      <Styled.FilterContainer>
        <p>DATES</p>
      </Styled.FilterContainer>
    </Styled.Container>
  );
};
