import { Marker, Popup } from "react-leaflet";

import { PolygonInfo } from "types/Polygon";
import { Polygon as _Polygon } from "react-leaflet";

export const Polygon = (props: {
  coordinates: any;
  name: string;
  option: {};
}) => {
  return (
    <_Polygon pathOptions={props.option} positions={props.coordinates}>
      <Popup>
        名前: {props.name}
        <br />
      </Popup>
    </_Polygon>
  );
};
