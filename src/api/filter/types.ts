export type OrgWithName = {
  name: string;
  orgNumber: string;
};

export type WeekdayWithName = {
  day: string;
  number: string;
};

export type EventFilterResponse = {
  organisations: OrgWithName[];
  names: string[];
  areas: string[];
};
