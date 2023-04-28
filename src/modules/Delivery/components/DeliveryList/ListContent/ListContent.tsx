import * as Styled from './styled';

// TODO: get data from be
// TODO: add correct types
// TODO: add icons for type
const fakeData = [
  {
    id: '1231kasdf',
    day: 'Måndag',
    place: {
      name: 'Kungshult',
      address: 'Drottninggatan 123',
    },
    type: 'delivery',
    in: '07.40',
    out: '07.41',
    carrier: 'Tonys budbil',
    area: 'Ramlösa',
    date: '2023.04.26',
  },
  {
    id: 'f89231kasdf',
    day: 'Tisdag',
    place: {
      name: 'Ramlösa skola',
      address: 'Stationsvägen 90',
    },
    type: 'delivery',
    in: '08.31',
    out: '08.37',
    carrier: 'Grönsakshallen',
    area: 'Rydebäck',
    date: '2023.04.27',
  },
];

export const ListContent = () => (
  <>
    {
    fakeData.map((delivery) => (
      <Styled.Container key={delivery.id}>
        <Styled.DayColumn>
          {delivery.day}
        </Styled.DayColumn>
        <Styled.PlaceColumn>
          {delivery.place.name}
          <Styled.SmallLabel>{delivery.place.address}</Styled.SmallLabel>
        </Styled.PlaceColumn>
        <Styled.TypeColumn>1</Styled.TypeColumn>
        <Styled.TimeInColumn>{delivery.in}</Styled.TimeInColumn>
        <Styled.TimeOutColumn>{delivery.out}</Styled.TimeOutColumn>
        <Styled.CarrierColumn>{delivery.carrier}</Styled.CarrierColumn>
        <Styled.AreaColumn>{delivery.area}</Styled.AreaColumn>
        <Styled.DateColumn>{delivery.date}</Styled.DateColumn>
      </Styled.Container>
    ))
      }
  </>
);
