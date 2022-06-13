import { PointInfo } from "types/Point";

import "./nurserySchoolTooltip.scss";

export const NurserySchoolTooltip = (props: {
  point: PointInfo;
  type: string;
}) => {
  return (
    <div className="card">
      <div className="name">{props.point.name}</div>
      <div className="contents">
        <div className="categories">
          <span className="category">{props.type}</span>
          <span className="category">保育園</span>
          <span className="category">0歳児受入可能</span>
          <span className="category">1歳児受入可能</span>
          <span className="category">2歳児受入可能</span>
          <span className="category">3歳児受入可能</span>
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
              <li>0歳児 {props.point.details.waiting_0yo}人</li>
              <li>1歳児 {props.point.details.waiting_1yo}人</li>
              <li>2歳児 {props.point.details.waiting_2yo}人</li>
              <li>3歳児 {props.point.details.waiting_3yo}人</li>
              <li>4歳児 {props.point.details.waiting_4yo}人</li>
              <li>5歳児 {props.point.details.waiting_5yo}人</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
