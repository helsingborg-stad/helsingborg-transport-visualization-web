export enum ZoneType {
  DISTRIBUTION = 'distribution',
  DELIVERY = 'delivery',
}

export enum FilterOptions {
  AREAS = 'areas',
  NAMES = 'names',
  ORGANISATIONS = 'organisations',
}

export type CheckboxFilter = {
  [key: string]: boolean;
};
