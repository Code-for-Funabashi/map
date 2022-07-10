import type { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

import { PointInfo, NurserySchoolMeta } from "types/Point";

import { NurserySchoolTooltip } from "./NurserySchoolTooltip";

export const Point = (props: {
  point: PointInfo;
  type: string;
  icon: Icon;
  nurserySchoolMeta: NurserySchoolMeta;
}) => {
  return (
    <Marker position={[props.point.lat, props.point.lng]} icon={props.icon}>
      <Popup>
        <NurserySchoolTooltip
          point={props.point}
          type={props.type}
          meta={props.nurserySchoolMeta}
        />
      </Popup>
    </Marker>
  );
};
