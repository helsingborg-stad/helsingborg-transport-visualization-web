import DistributionSvg from 'assets/hangar_icon.svg';
import { ZoneType } from 'types';
import CollecionSvg from 'assets/school_icon.svg';
import * as Styled from './styled';

// TODO: get data from be
// TODO: add correct types
const fakeData = [
  {
    id: '1231kasdf',
    day: 'Måndag',
    place: {
      name: 'Kungshult',
      address: 'Drottninggatan 123',
    },
    type: ZoneType.DISTRIBUTION,
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
    type: ZoneType.COLLECTION,
    in: '08.31',
    out: '08.37',
    carrier: 'Grönsakshallen',
    area: 'Rydebäck',
    date: '2023.04.27',
  },
  {
    id: '231kasdf',
    day: 'Tisdag',
    place: {
      name: 'Ramlösa skola',
      address: 'Stationsvägen 90',
    },
    type: ZoneType.COLLECTION,
    in: '08.56',
    out: '08.59',
    carrier: 'Grönsakshallen',
    area: 'Rydebäck',
    date: '2023.04.27',
  },
  {
    id: '231kaasdfsdf',
    day: 'Tisdag',
    place: {
      name: 'Vårdboende',
      address: 'Kungsgatan 5',
    },
    type: ZoneType.COLLECTION,
    in: '14.35',
    out: '14.43',
    carrier: 'Tonys budbil',
    area: 'Stattena',
    date: '2023.04.27',
  },
  {
    id: 'km1a231kasdf',
    day: 'Tisdag',
    place: {
      name: 'Kungshult',
      address: 'Drottninggatan 123',
    },
    type: ZoneType.DISTRIBUTION,
    in: '15.05',
    out: '15.13',
    carrier: 'Tonys budbil',
    area: 'Ramlösa',
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
        <Styled.TypeColumn>
          {delivery.type === ZoneType.DISTRIBUTION
            ? <Styled.SVGContainer src={DistributionSvg} alt="Distribution icon" />
            : <Styled.SVGContainer src={CollecionSvg} alt="Collection icon" />}
        </Styled.TypeColumn>
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
