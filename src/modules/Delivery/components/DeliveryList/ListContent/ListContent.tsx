import DistributionSvg from 'assets/distributor_icon.svg';
import { ZoneType } from 'types';
import CollecionSvg from 'assets/delivery_icon.svg';
import { FC } from 'react';
import { Event } from 'types/event';
import { useDateConverter } from 'utils';
import * as Styled from './styled';

type ListContentProps = {
  events?: Event[];
  resetFilters: () => void;
};

export const ListContent: FC<ListContentProps> = ({ events, resetFilters }) => {
  const { getWeekday, getHourAndMin, getYYYYMMDD } = useDateConverter();

  if (!events || events.length <= 0) {
    return (
      <Styled.NoResultText>
        Inga resultat. Begränsa filtrering och försök igen.
        {' '}
        <Styled.RefreshLink onClick={() => resetFilters()}>
          Rensa alla filter
        </Styled.RefreshLink>
      </Styled.NoResultText>
    );
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
            <Styled.IconInfo>
              <Styled.InfoText>
                {
                  event.zoneType === ZoneType.DISTRIBUTION
                    ? 'Lager' : 'Leveransplats'
                }
              </Styled.InfoText>
            </Styled.IconInfo>
          </Styled.TypeColumn>
          <Styled.TimeOutColumn>{getHourAndMin(event.exitedAt)}</Styled.TimeOutColumn>
          <Styled.CarrierColumn>
            {event.distributionOrganisation ? event.distributionOrganisation.name : ''}
            {event.distributionOrganisation?.name && (
            <Styled.InfoBox>
              <Styled.InfoHeader>{event.distributionOrganisation.name}</Styled.InfoHeader>
              <Styled.InfoText>
                Kontaktperson:
                {' '}
                {event.distributionOrganisation.contactPerson}
              </Styled.InfoText>
              <Styled.InfoText>{event.distributionOrganisation.email}</Styled.InfoText>
              <Styled.InfoText>{event.distributionOrganisation.mobileNumber}</Styled.InfoText>
            </Styled.InfoBox>
            )}
          </Styled.CarrierColumn>
          <Styled.CarrierColumn>
            {event.organisation.name}
            <Styled.InfoBox>
              <Styled.InfoHeader>{event.organisation.name}</Styled.InfoHeader>
              <Styled.InfoText>
                Kontaktperson:
                {' '}
                {event.organisation.contactPerson}
              </Styled.InfoText>
              <Styled.InfoText>{event.organisation.email}</Styled.InfoText>
              <Styled.InfoText>{event.organisation.mobileNumber}</Styled.InfoText>
            </Styled.InfoBox>
          </Styled.CarrierColumn>
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
