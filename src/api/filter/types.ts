export type OrgWithName = {
  name: string;
  orgNumber: string;
};

export type EventFilterResponse = {
  oranisations: OrgWithName[];
  names: string[];
  areas: string[];
};
