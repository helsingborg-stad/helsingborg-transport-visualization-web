import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import { FC, useState } from 'react';
import { Event, EventGroup } from 'types/event';
import { useDateConverter } from 'utils';
import * as Styled from './styled';
import { EventRow } from '../EventRow';

type Props = {
  events: Event[];
  statistics: EventGroup['statistics'];
};

export const GroupOfEvents: FC<Props> = ({
  events, statistics,
}) => {
  const { getWeekday, getYYYYMMDD } = useDateConverter();
  const [isOpen, setIsOpen] = useState(false);
  const getHoursAndMins = (ms: number) => {
    const hours = Math.floor(Math.abs(ms) / 3600000);
    const minutes = Math.floor((Math.abs(ms) % 3600000) / 60000);
    if (hours === 0) return `${minutes}m`;
    return `${hours}h ${minutes}m`;
  };

  const getDistance = (distance: number) => {
    if (distance < 1000) return `${distance}m`;
    return `${(distance / 1000).toFixed(1)}km`;
  };

  return (
    <Styled.Container>
      <Styled.GroupBar onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        <Styled.GroupTitle>{`${getWeekday(events[0].enteredAt)}: ${getYYYYMMDD(events[0].enteredAt)} ${events[0].organisation.name}`}</Styled.GroupTitle>
      </Styled.GroupBar>
      {isOpen
      && events.map((event) => (
        <EventRow event={event} key={event.id} />
      ))}
      {isOpen && (
        <Styled.StatisticsContainer>
          <Styled.Divider />
          <Styled.Grid>
            <Styled.StatisticsText>
              Antal stopp:
              {' '}
              <b>{statistics.numberOfStops}</b>
            </Styled.StatisticsText>
            <Styled.StatisticsText>
              Total tid:
              {' '}
              <b>{getHoursAndMins(statistics.totalDuration)}</b>
            </Styled.StatisticsText>
            <Styled.StatisticsText>
              Uppskattad CO
              <sub>2</sub>
              -utsläpp, el:
              {' '}
              <b>
                {((statistics.distance * 0.011) / 1000).toFixed(2)}
                {' kg '}
                CO
                <sub>2</sub>
                e
              </b>
            </Styled.StatisticsText>
            <Styled.StatisticsText>
              Uppskattad CO2-utsläpp, HVO100:
              {' '}
              <b>
                {((statistics.distance * 0.072) / 1000).toFixed(2)}
                {' kg '}
                CO
                <sub>2</sub>
                e
              </b>
            </Styled.StatisticsText>
            <Styled.StatisticsText>
              Uppskattad aktiv körtid:
              {' '}
              <b>{getHoursAndMins(statistics.activeDrivingTime)}</b>
            </Styled.StatisticsText>
            <Styled.StatisticsText>
              Antal områden:
              {' '}
              <b>{statistics.numberOfDistinctZones}</b>
            </Styled.StatisticsText>
            <Styled.StatisticsText>
              Medeltid/stopp:
              {' '}
              <b>{getHoursAndMins(statistics.averageStopDuration)}</b>
            </Styled.StatisticsText>
            <Styled.StatisticsText>
              Uppskattad CO
              <sub>2</sub>
              -utsläpp, biogas:
              {' '}
              <b>
                {((statistics.distance * 0.072) / 1000).toFixed(2)}
                {' kg '}
                CO
                <sub>2</sub>
                e
              </b>
            </Styled.StatisticsText>
            <Styled.StatisticsText>
              Uppskattad CO
              <sub>2</sub>
              -utsläpp, diesel:
              {' '}
              <b>
                {((statistics.distance * 0.147) / 1000).toFixed(2)}
                {' kg '}
                CO
                <sub>2</sub>
                e
              </b>
            </Styled.StatisticsText>
            <Styled.StatisticsText>
              Uppskattad distans:
              {' '}
              <b>{getDistance(statistics.distance)}</b>
            </Styled.StatisticsText>
            <div />
            <div />
            <div />
            <Styled.StatisticsText>
              Uppskattad CO
              <sub>2</sub>
              -utsläpp, bensin:
              {' '}
              <b>
                {((statistics.distance * 0.176) / 1000).toFixed(2)}
                {' kg '}
                CO
                <sub>2</sub>
                e
              </b>
            </Styled.StatisticsText>
          </Styled.Grid>
        </Styled.StatisticsContainer>
      )}

    </Styled.Container>
  );
};
