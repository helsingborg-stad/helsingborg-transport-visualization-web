import {
  Button, FilterButtonDate,
} from 'components';
import {
  ActiveFilterType, DateTimeFilterSelected, FilterOptionType, FilterType,
  FilterOptions,
} from 'types';
import { ButtonSize } from 'components/Button/types';
import { FC } from 'react';
import { Lock } from '@mui/icons-material';
import { useAuth } from 'hooks/useAuth';
import * as Styled from './styled';
import { AreaFilter } from './AreaFilter';
import { NameFilter } from './NameFilter';
import { OrganisationFilter } from './OrganisationFilter';
import { DistributorFilter } from './DistributorFilter';
import { WeekdayFilter } from './WeekdayFilter';

type FilterListProps = {
  filters?: FilterType;
  filterOptions?: FilterOptionType;
  checkFilter: (filterName: FilterOptions, key: string) => void;
  resetFilters: (filter?: FilterOptions) => void;
  triggerReload: () => void;
  activeFilters: ActiveFilterType;
  setDateTimeFilter: (filterName: string) => (data: DateTimeFilterSelected) => void;
  exportEventsToExcel: (filter?: string) => void;
  showExportButton: boolean;
};

export const FilterList: FC<FilterListProps> = ({
  filters, checkFilter, resetFilters, triggerReload, showExportButton,
  filterOptions, activeFilters, setDateTimeFilter, exportEventsToExcel,
}) => {
  const { organisation } = useAuth();
  if (!filters || !filterOptions) {
    return null;
  }

  const hasActiveFilter = Object.values(activeFilters).some((filter) => filter !== 0);

  return (
    <Styled.Container>
      <Styled.FilterContainer>
        <FilterButtonDate
          activeFilters={activeFilters.dates}
          label="Datum"
          filterOptions={filterOptions.dates}
          selected={filters.dates}
          onClick={setDateTimeFilter('dates')}
        />
        <WeekdayFilter
          filterOptions={filterOptions.weekdays}
          weekdayFilter={filters.weekdays}
          checkFilter={checkFilter}
          resetFilters={resetFilters}
          triggerReload={triggerReload}
          activeFilters={activeFilters.weekdays}
        />
        <FilterButtonDate
          activeFilters={activeFilters.timeInterval}
          label="Tid"
          filterOptions={filterOptions.timeInterval}
          selected={filters.timeInterval}
          onClick={setDateTimeFilter('timeInterval')}
        />
        <NameFilter
          nameFilter={filters.names}
          checkFilter={checkFilter}
          resetFilters={resetFilters}
          triggerReload={triggerReload}
          activeFilters={activeFilters.names}
        />
        <AreaFilter
          areaFilter={filters.areas}
          checkFilter={checkFilter}
          resetFilters={resetFilters}
          triggerReload={triggerReload}
          activeFilters={activeFilters.areas}
        />
        {organisation?.isPublic && (
          <OrganisationFilter
            organisationFilter={filters.organisations}
            filterOptions={filterOptions.organisations}
            checkFilter={checkFilter}
            resetFilters={resetFilters}
            triggerReload={triggerReload}
            activeFilters={activeFilters.organisations}
          />
        )}
        <DistributorFilter
          distributorFilter={filters.distributors}
          filterOptions={filterOptions.distributors}
          checkFilter={checkFilter}
          resetFilters={resetFilters}
          triggerReload={triggerReload}
          activeFilters={activeFilters.distributors}
        />
        {
        hasActiveFilter && (
        <Button
          type="button"
          buttonSize={ButtonSize.SMALL}
          onClick={() => resetFilters()}
        >
          Rensa alla
        </Button>
        )
      }

      </Styled.FilterContainer>
      <div style={{ display: 'flex', alignContent: 'end', gap: '10px' }}>
        {!organisation?.isPublic && (
        <div style={{ display: 'flex', alignContent: 'end', gap: '10px' }}>
          <Lock />
          {' '}
          <p style={{ alignContent: 'center' }}>Konto är privat, ingen data delas</p>
        </div>
        )}
        {showExportButton && (
        <Button
          onClick={() => exportEventsToExcel()}
          type="button"
          buttonSize={ButtonSize.SMALL}
        >
          Exportera till excel
        </Button>
        )}
      </div>

    </Styled.Container>
  );
};

FilterList.defaultProps = {
  filters: undefined,
  filterOptions: undefined,
};
