import { PointInfo } from "types/Point";

import "./tooltip.scss";

export const Tooltip = (props: { point: PointInfo; type: string }) => {
  return (
    <div className="card">
      <div className="name">{props.point.name}</div>

      <div className="contents">
        <div className="address">
          <div className="title">住所</div>
          <div className="contents">{props.point.details.address}</div>
        </div>

        <div className="contacts">
          <div className="title">連絡先</div>
          <div className="contents">{props.point.details.phone_number}</div>
        </div>
      </div>
    </div>
  );
};
