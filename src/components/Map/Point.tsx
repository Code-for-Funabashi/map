import type { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

import { PointInfo } from "types/Point";
import { NurserySchoolTooltip } from "./NurserySchoolTooltip";

export const Point = (props: {
  point: PointInfo;
  type: string;
  icon: Icon;
  hoikuen_yearmonth: string;
}) => {
  return (
    <Marker position={[props.point.lat, props.point.lng]} icon={props.icon}>
      <Popup>
        <NurserySchoolTooltip
          point={props.point}
          type={props.type}
          meta={{
            year: Number(props.hoikuen_yearmonth.substring(0, 4)),
            month: Number(props.hoikuen_yearmonth.substring(4, 6)),
          }}
        />
      </Popup>
    </Marker>
  );
};
