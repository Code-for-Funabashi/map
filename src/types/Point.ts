import { Icon } from "leaflet";

export interface PointMeta {
  url: string;
  type: string;
  icon: Icon;
}

export interface PointInfoDetail {
  address?: string;
  phone_number?: string;
}

export interface PointInfo {
  name: string;
  lat: number;
  lng: number;
  details: PointInfoDetail;
}