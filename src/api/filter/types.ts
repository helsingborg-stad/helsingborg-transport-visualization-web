export type OrgWithName = {
  name: string;
  orgNumber: string;
};

export type EventFilterResponse = {
  organisations: OrgWithName[];
  names: string[];
  areas: string[];
};
