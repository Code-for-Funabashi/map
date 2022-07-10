import { PointInfo, NurserySchoolMeta } from "types/Point";

import "./tooltip.scss";

export const NurserySchoolTooltip = (props: {
  point: PointInfo;
  type: string;
  meta: NurserySchoolMeta;
}) => {
  return (
    <div className="card">
      <div className="name">{props.point.name}</div>

      <div className="contents">
        <div>
          データ取得月: {props.meta.year}年{props.meta.month}月
        </div>
        <div className="categories">
          <span className="category">{props.point.details.type}</span>
          <span className="category">
            受入可能年齢: {props.point.details.acceptable_age}
          </span>
        </div>

        <div className="address">
          <div className="title">住所</div>
          <div className="contents">{props.point.details.address}</div>
        </div>

        <div className="contacts">
          <div className="title">連絡先</div>
          <div className="contents">{props.point.details.phone_number}</div>
        </div>

        <div className="capacities">
          <div className="title">受入可能人数</div>
          <div className="contents">
            <ul>
              <li>
                0歳
                <br />
                {props.point.details.waiting_0yo
                  ? props.point.details.waiting_0yo
                  : "-"}
                人
              </li>
              <li>
                1歳 <br />
                {props.point.details.waiting_1yo
                  ? props.point.details.waiting_1yo
                  : "-"}
                人
              </li>
              <li>
                2歳 <br />
                {props.point.details.waiting_2yo
                  ? props.point.details.waiting_2yo
                  : "-"}
                人
              </li>
              <li>
                3歳 <br />
                {props.point.details.waiting_3yo
                  ? props.point.details.waiting_3yo
                  : "-"}
                人
              </li>
              <li>
                4歳 <br />
                {props.point.details.waiting_4yo
                  ? props.point.details.waiting_4yo
                  : "-"}
                人
              </li>
              <li>
                5歳 <br />
                {props.point.details.waiting_5yo
                  ? props.point.details.waiting_5yo
                  : "-"}
                人
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
