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
  acceptable_0yo?: string;
  acceptable_1yo?: string;
  acceptable_2yo?: string;
  acceptable_3yo?: string;
  acceptable_4yo?: string;
  acceptable_5yo?: string;
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
