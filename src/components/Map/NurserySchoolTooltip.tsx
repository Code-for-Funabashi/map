import { PointInfo, NurserySchoolMeta } from "types/Point";

import tooltip from "./tooltip.module.scss";

export const NurserySchoolTooltip = (props: {
  point: PointInfo;
  type: string;
  meta: NurserySchoolMeta;
}) => {
  return (
    <div className={tooltip.card}>
      <div className={tooltip.name}>{props.point.name}</div>

      <div className={tooltip.contents}>
        <div>
          データ取得月: {props.meta.year}年{props.meta.month}月
        </div>
        <div className={tooltip.categories}>
          <span className={tooltip.category}>{props.point.details.type}</span>
          <span className={tooltip.category}>
            受入可能年齢: {props.point.details.acceptable_age}
          </span>
        </div>

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

        <div className={tooltip.capacities}>
          <div className={tooltip.title}>受け入れ可能人数</div>
          <div className={tooltip.contents}>
            <ul>
              <li>
                0歳
                <br />
                {props.point.details.acceptable_0yo
                  ? props.point.details.acceptable_0yo
                  : "-"}
                人
              </li>
              <li>
                1歳 <br />
                {props.point.details.acceptable_1yo
                  ? props.point.details.acceptable_1yo
                  : "-"}
                人
              </li>
              <li>
                2歳 <br />
                {props.point.details.acceptable_2yo
                  ? props.point.details.acceptable_2yo
                  : "-"}
                人
              </li>
              <li>
                3歳 <br />
                {props.point.details.acceptable_3yo
                  ? props.point.details.acceptable_3yo
                  : "-"}
                人
              </li>
              <li>
                4歳 <br />
                {props.point.details.acceptable_4yo
                  ? props.point.details.acceptable_4yo
                  : "-"}
                人
              </li>
              <li>
                5歳 <br />
                {props.point.details.acceptable_5yo
                  ? props.point.details.acceptable_5yo
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
