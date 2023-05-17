import { useGetEventFilters, useGetEvents } from 'modules/Delivery/hooks';
import { Button, Loading } from 'components';
import { FilterList } from './FilterList';
import { ListContent } from './ListContent';
import { ListHeader } from './ListHeader';
import * as Styled from './styled';

export const DeliveryList = () => {
  const {
    fetchEvents, events, error, isLoading,
  } = useGetEvents();
  const {
    filters, checkFilter, resetFilters, triggerReload, filterOptions,
    activeFilters,
    setDateTimeFilter,
  } = useGetEventFilters({ fetchEvents });

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
      />
      <ListHeader />
      <ListContent events={events} resetFilters={resetFilters} />
    </Styled.Container>
  );
};
