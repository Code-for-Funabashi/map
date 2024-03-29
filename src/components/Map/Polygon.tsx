import { Popup } from "react-leaflet";
import { Polygon as POLYGON } from "react-leaflet";
import { PathOptions } from "leaflet";
import { PolygonInfo } from "types/Polygon";

export const Polygon = (props: {
  polygon: PolygonInfo;
  type: string;
  option: PathOptions;
}) => {
  return (
    <POLYGON pathOptions={props.option} positions={props.polygon.coordinates}>
      <Popup>
        種別: {props.type}
        <br />
        名前: {props.polygon.name}
      </Popup>
    </POLYGON>
  );
};
