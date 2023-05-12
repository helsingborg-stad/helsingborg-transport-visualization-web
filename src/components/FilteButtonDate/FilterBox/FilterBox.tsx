import { useDateConverter } from 'utils/useDateConverter';
import { RadioButton } from '../RadioButton';
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
        <Styled.OptionList>
          <RadioButton
            label="Igår"
            checked={false}
            onClick={() => null}
          />
          <RadioButton
            label="Idag"
            checked
            onClick={() => null}
          />
          <RadioButton
            label="Senaste 7 dagarna"
            checked={false}
            onClick={() => null}
          />
        </Styled.OptionList>
      </Styled.FilterContainer>
    </Styled.Container>
  );
};
