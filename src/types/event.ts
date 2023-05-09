import { ZoneType } from './delivery';
import { Organisation } from './organisation';

export type Event = {
  trackingId: string;
  id: string;
  organisation: Organisation;
  zoneType: ZoneType;
  zoneId: string;
  address: string;
  name: string;
  area: string;
  createdAt: string;
  enteredAt: string;
  exitedAt: string;
};
