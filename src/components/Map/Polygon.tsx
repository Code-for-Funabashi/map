import { Popup } from "react-leaflet";
import { Polygon as POLYGON } from "react-leaflet";

export const Polygon = (props: {
  coordinates: any;
  name: string;
  option: {};
}) => {
  return (
    <POLYGON pathOptions={props.option} positions={props.coordinates}>
      <Popup>
        名前: {props.name}
        <br />
      </Popup>
    </POLYGON>
  );
};
