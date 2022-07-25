import { PointInfo } from "types/Point";

import tooltip from "./tooltip.module.scss";

export const Tooltip = (props: { point: PointInfo; type: string }) => {
  return (
    <div className={tooltip.card}>
      <div className={tooltip.name}>{props.point.name}</div>

      <div className={tooltip.contents}>
        <div className={tooltip.address}>
          <div className={tooltip.title}>住所</div>
          <div className={tooltip.contents}>{props.point.details.address}</div>
        </div>

        <div className={tooltip.contacts}>
          <div className={tooltip.title}>連絡先</div>
          <div className={tooltip.contents}>
            {props.point.details.phone_number}
          </div>
        </div>
      </div>
    </div>
  );
};
