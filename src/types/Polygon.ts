import { PathOptions, LatLngExpression } from "leaflet";

export interface PolygonMeta {
  type: string;
  url: string;
  option: PathOptions;
  }



export interface PolygonInfo {
  name: string;
  coordinates: LatLngExpression[][][];
  }