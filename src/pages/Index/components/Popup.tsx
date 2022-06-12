import React, { FC } from "react";

import { PointInfo } from "types/Point";

interface PopupInterface {
  marker: PointInfo;
  type: string;
}

const Popup: FC<PopupInterface> = ({ marker, type }) => {
  return (
    <div>
      種別: {type}
      <br />
      施設名: {marker.name}
      <br />
      住所: {marker.details.address}
      <br />
      電話番号: {marker.details.phone_number}
    </div>
  );
};
export default Popup;
