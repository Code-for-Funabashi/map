import type { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { PointInfo } from "./PointLayer";

export const Point = (props: {
  point: PointInfo;
  type: string;
  icon: Icon;
}) => {
  return (
    <Marker position={[props.point.lat, props.point.lng]} icon={props.icon}>
      <Popup>
        種別: {props.type}
        <br />
        名前: {props.point.name}
        <br />
        住所: {props.point.details.address}
        <br />
        電話番号: {props.point.details.phone_number}
      </Popup>
    </Marker>
  );
};
