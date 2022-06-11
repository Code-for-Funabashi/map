import { PointInfo } from "types/Point";

import "./nurserySchoolTooltip.scss";

export const NurserySchoolTooltip = (props: { point: PointInfo }) => {
  return (
    <div className="card">
      <div className="name">ホゲホゲ保育園</div>
      <div className="contents">
        <div className="categories">
          <span className="category">私立</span>
          <span className="category">保育園</span>
          <span className="category">0歳児受入可能</span>
          <span className="category">1歳児受入可能</span>
          <span className="category">2歳児受入可能</span>
          <span className="category">3歳児受入可能</span>
        </div>

        <div className="address">
          <div className="title">住所</div>
          <div className="contents">
            <span className="postal-code">〒100-0000</span>
            <br />
            船橋市船橋0-0-0
          </div>
        </div>

        <div className="contacts">
          <div className="title">連絡先</div>
          <div className="contents">
            000-000-0000
            <br />
            hoge@example.com
            <br />
            https://example.com/
          </div>
        </div>

        <div className="capacities">
          <div className="title">受入可能人数</div>
          <div className="contents">
            <ul>
              <li>0歳児 2人</li>
              <li>1歳児 4人</li>
              <li>2歳児 3人</li>
              <li>3歳児 5人</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
