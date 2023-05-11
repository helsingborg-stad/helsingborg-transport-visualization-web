export enum ZoneType {
  DISTRIBUTION = 'distribution',
  DELIVERY = 'delivery',
}

export enum FilterOptions {
  AREAS = 'areas',
  NAMES = 'names',
  ORGANISATIONS = 'organisations',
  WEEKDAYS = 'weekdays',
}

export type CheckboxFilter = {
  [key: string]: boolean;
};

export type WeekdayFilter = {
  [key: number]: boolean;
};
