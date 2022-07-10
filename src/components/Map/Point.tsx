import type { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

import { PointInfo } from "types/Point";
import { NurserySchoolTooltip } from "./NurserySchoolTooltip";

export const Point = (props: {
  point: PointInfo;
  type: string;
  icon: Icon;
}) => {
  return (
    <Marker position={[props.point.lat, props.point.lng]} icon={props.icon}>
      <Popup>
        <NurserySchoolTooltip
          point={props.point}
          type={props.type}
          meta={{ year: 2022, month: 5 }}
        />
      </Popup>
    </Marker>
  );
};
