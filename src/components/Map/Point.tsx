import type { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

import { PointInfo } from "types/Point";

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
        <br />
        受け入れ人数(0歳): {props.point.details.waiting_0yo}
        <br />
        受け入れ人数(1歳): {props.point.details.waiting_1yo}
        <br />
        受け入れ人数(2歳): {props.point.details.waiting_2yo}
        <br />
        受け入れ人数(3歳): {props.point.details.waiting_3yo}
        <br />
        受け入れ人数(4歳): {props.point.details.waiting_4yo}
        <br />
        受け入れ人数(5歳): {props.point.details.waiting_5yo}
      </Popup>
    </Marker>
  );
};
