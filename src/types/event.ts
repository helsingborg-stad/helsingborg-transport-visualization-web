import { ZoneType } from './delivery';

export type Event = {
  trackingId: string;
  id: string;
  orgNumber: string;
  zoneType: ZoneType;
  zoneId: string;
  address: string;
  name: string;
  area: string;
  createdAt: string;
  enteredAt: string;
  exitedAt: string;
};
