import { PathOptions, LatLngExpression } from "leaflet";

export interface PolygonMeta {
    type: string;
    url: string;
    option: PathOptions;
  }



export interface PolygonInfo {
    type: any;
    name: string;
    coordinates: LatLngExpression[][][];
  }