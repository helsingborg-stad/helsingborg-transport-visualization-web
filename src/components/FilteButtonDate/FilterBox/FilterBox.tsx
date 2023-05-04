import * as Styled from './styled';

export const FilterBox = () => {
  const date = new Date();
  const label = date.toLocaleString('sv-SE', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Styled.Container>
      <Styled.Header>
        <div>
          <Styled.Today>IDAG</Styled.Today>
          <Styled.Heading>{label}</Styled.Heading>
        </div>
      </Styled.Header>
      <Styled.FilterContainer>
        <p>DATES</p>
      </Styled.FilterContainer>
    </Styled.Container>
  );
};
