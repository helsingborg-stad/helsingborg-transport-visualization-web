import { Polygon, GeoJsonObject } from 'geojson';
import { Organisation } from './organisation';

export type Feature = {
  type: 'Feature';
  geometry: Polygon;
  properties: {
    id: string;
    name: string;
    address: string;
    area: string;
    type: ZoneType;
    organisation: Organisation
  };
};

export type FeatureCollection = GeoJsonObject & {
  type: 'FeatureCollection';
  features: Feature[]
};

export enum ZoneType {
  DISTRIBUTION = 'distribution',
  DELIVERY = 'delivery',
}
