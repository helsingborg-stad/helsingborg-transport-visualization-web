import { useGetEventFilters, useGetEvents } from 'modules/Delivery/hooks';
import { Button, Loading } from 'components';
import { FC } from 'react';
import { FilterList, ListContent, ListHeader } from './components';
import * as Styled from './styled';

type Props = {
  grouped?: boolean;
};

export const DeliveryList: FC<Props> = ({ grouped }) => {
  const {
    fetchEvents, exportEvents, fetchGroupedEvents,
    events, error, isLoading, groupedEvents,
  } = useGetEvents();
  const {
    filters, checkFilter, resetFilters, triggerReload, filterOptions,
    activeFilters, exportEventsToExcel,
    setDateTimeFilter,
  } = useGetEventFilters({
    fetchEvents: grouped ? fetchGroupedEvents : fetchEvents,
    exportEvents,
    grouped: !!grouped,
  });

  if (isLoading) {
    return (
      <Styled.ErrorContainer>
        <Loading />
      </Styled.ErrorContainer>
    );
  }

  if (error && !isLoading) {
    return (
      <Styled.ErrorContainer>
        <Styled.ErrorText>
          Sam kan inte visas för tillfället
        </Styled.ErrorText>
        <Styled.ErrorButtonContainer>
          <Button primary type="button" onClick={() => window.location.reload()}>Försök igen</Button>
        </Styled.ErrorButtonContainer>
      </Styled.ErrorContainer>
    );
  }

  return (
    <Styled.Container>
      <FilterList
        activeFilters={activeFilters}
        filters={filters}
        checkFilter={checkFilter}
        resetFilters={resetFilters}
        triggerReload={triggerReload}
        filterOptions={filterOptions}
        setDateTimeFilter={setDateTimeFilter}
        exportEventsToExcel={exportEventsToExcel}
        showExportButton={!grouped}
      />
      <ListHeader />
      <ListContent events={events} groupedEvents={groupedEvents} resetFilters={resetFilters} />
    </Styled.Container>
  );
};

DeliveryList.defaultProps = {
  grouped: false,
};
