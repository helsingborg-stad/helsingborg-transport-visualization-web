import { FC } from 'react';
import DistributionSvg from 'assets/distributor_icon.svg';
import { ZoneType } from 'types';
import CollecionSvg from 'assets/delivery_icon.svg';
import { Event } from 'types/event';
import { useDateConverter } from 'utils';
import * as Styled from './styled';

type Props = {
  event: Event;
};

export const EventRow: FC<Props> = ({ event }) => {
  const { getWeekday, getHourAndMin, getYYYYMMDD } = useDateConverter();
  return (
    <Styled.Container key={event.id}>
      <Styled.Column>{getYYYYMMDD(event.enteredAt)}</Styled.Column>
      <Styled.Column>
        {getWeekday(event.enteredAt)}
      </Styled.Column>
      <Styled.Column>{getHourAndMin(event.exitedAt)}</Styled.Column>
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
      <Styled.PlaceColumn>
        {event.name}
        <Styled.SmallLabel>{event.address}</Styled.SmallLabel>
      </Styled.PlaceColumn>
      <Styled.Column>{event.area}</Styled.Column>
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

      <Styled.Column>{event.sessionId}</Styled.Column>
      <Styled.Column>{getHourAndMin(event.enteredAt)}</Styled.Column>
      <Styled.Column>{event.os}</Styled.Column>
    </Styled.Container>
  );
};
