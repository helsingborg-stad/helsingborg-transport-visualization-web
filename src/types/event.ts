import { ZoneType } from './zone';
import { Organisation } from './organisation';

export type Event = {
  id: string;
  sessionId: string;
  deviceId: string | null;
  os: string | null;
  organisation: Organisation;
  distributionOrganisation: Organisation | null;
  zoneType: ZoneType;
  zoneId: string;
  address: string;
  name: string;
  area: string;
  createdAt: string;
  enteredAt: string;
  exitedAt: string;
};

export type EventGroup = {
  events: Event[];
  statistics: {
    numberOfStops: number;
    totalDuration: number;
    numberOfDistinctZones: number;
    averageStopDuration: number;
    activeDrivingTime: number;
  }
};
