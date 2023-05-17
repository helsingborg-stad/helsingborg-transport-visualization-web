export enum FilterOptions {
  AREAS = 'areas',
  NAMES = 'names',
  ORGANISATIONS = 'organisations',
  WEEKDAYS = 'weekdays',
  DISTRIBUTORS = 'distributors',
}

export type CheckboxFilter = {
  [key: string]: boolean;
};

export type WeekdayFilter = {
  [key: number]: boolean;
};

export type OrgWithName = {
  name: string;
  orgNumber: string;
};

export type WeekdayWithName = {
  day: string;
  number: string;
};

export type DateTimeFilterOption = {
  label: string;
  to?: string;
  from?: string;
};

export type DateTimeFilterSelected = {
  to?: string;
  from?: string;
};

export type FilterType = {
  organisations: CheckboxFilter;
  distributors: CheckboxFilter;
  names: CheckboxFilter;
  areas: CheckboxFilter;
  weekdays: CheckboxFilter;
  dates?: DateTimeFilterSelected;
  timeInterval?: DateTimeFilterSelected;
};

export type FilterOptionType = {
  organisations: OrgWithName[];
  distributors: OrgWithName[];
  names: string[];
  areas: string[];
  weekdays: WeekdayWithName[];
  dates: DateTimeFilterOption[];
  timeInterval: DateTimeFilterOption[];
};

export type ActiveFilterType = {
  organisations: number;
  distributors: number;
  names: number;
  areas: number;
  weekdays: number;
  dates: number;
  timeInterval: number;
};
