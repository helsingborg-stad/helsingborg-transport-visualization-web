import DistributionSvg from 'assets/hangar_icon.svg';
import { ZoneType } from 'types';
import CollecionSvg from 'assets/school_icon.svg';
import { FC } from 'react';
import { Event } from 'types/event';
import { useDateConverter } from 'utils';
import * as Styled from './styled';

type ListContentProps = {
  events?: Event[];
};

export const ListContent: FC<ListContentProps> = ({ events }) => {
  const { getWeekday, getHourAndMin, getYYYYMMDD } = useDateConverter();
  if (!events) {
    return null;
  }

  return (
    <>
      {
      events.map((event) => (
        <Styled.Container key={event.id}>
          <Styled.DayColumn>
            {getWeekday(event.enteredAt)}
          </Styled.DayColumn>
          <Styled.PlaceColumn>
            {event.name}
            <Styled.SmallLabel>{event.address}</Styled.SmallLabel>
          </Styled.PlaceColumn>
          <Styled.TypeColumn>
            {event.zoneType === ZoneType.DISTRIBUTION
              ? <Styled.SVGContainer src={DistributionSvg} alt="Distribution icon" />
              : <Styled.SVGContainer src={CollecionSvg} alt="Collection icon" />}
          </Styled.TypeColumn>
          <Styled.TimeInColumn>{getHourAndMin(event.enteredAt)}</Styled.TimeInColumn>
          <Styled.TimeOutColumn>{getHourAndMin(event.exitedAt)}</Styled.TimeOutColumn>
          <Styled.CarrierColumn>{event.orgNumber}</Styled.CarrierColumn>
          <Styled.AreaColumn>{event.area}</Styled.AreaColumn>
          <Styled.DateColumn>{getYYYYMMDD(event.enteredAt)}</Styled.DateColumn>
        </Styled.Container>
      ))
      }
    </>
  );
};

ListContent.defaultProps = {
  events: [],
};
