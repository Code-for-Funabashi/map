import type { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";

import { PointInfo, NurserySchoolMeta } from "types/Point";

import { NurserySchoolTooltip } from "./NurserySchoolTooltip";
import { Tooltip } from "./Tooltip";

export const Point = (props: {
  point: PointInfo;
  type: string;
  icon: Icon;
  nurserySchoolMeta: NurserySchoolMeta;
}) => {
  let tooltip;
  if (props.type === "保育園") {
    tooltip = (
      <NurserySchoolTooltip
        point={props.point}
        type={props.type}
        meta={props.nurserySchoolMeta}
      />
    );
  } else {
    tooltip = <Tooltip point={props.point} type={props.type} />;
  }
  return (
    <Marker position={[props.point.lat, props.point.lng]} icon={props.icon}>
      <Popup>{tooltip}</Popup>
    </Marker>
  );
};
