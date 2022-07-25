import { Icon } from "leaflet";

export interface PointMeta {
  url: string;
  type: string;
  icon: Icon;
}

export interface PointInfoDetail {
  address?: string;
  phone_number?: string;
  type?: string;
  acceptable_age?: string;
  waiting_0yo?: string;
  waiting_1yo?: string;
  waiting_2yo?: string;
  waiting_3yo?: string;
  waiting_4yo?: string;
  waiting_5yo?: string;
}

export interface PointInfo {
  name: string;
  lat: number;
  lng: number;
  details: PointInfoDetail;
}

export interface NurserySchoolMeta {
  year: number;
  month: number;
}
