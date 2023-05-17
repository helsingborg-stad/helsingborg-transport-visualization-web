import { OrgWithName } from 'types';

export type EventFilterResponse = {
  organisations: OrgWithName[];
  distributors: OrgWithName[];
  names: string[];
  areas: string[];
};
