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
        待機児童(0歳): {props.point.details.waiting_0yo}
        <br />
        待機児童(1歳): {props.point.details.waiting_1yo}
        <br />
        待機児童(2歳): {props.point.details.waiting_2yo}
        <br />
        待機児童(3歳): {props.point.details.waiting_3yo}
        <br />
        待機児童(4歳): {props.point.details.waiting_4yo}
        <br />
        待機児童(5歳): {props.point.details.waiting_5yo}
      </Popup>
    </Marker>
  );
};
