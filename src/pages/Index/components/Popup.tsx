import React, { FC } from "react";

import { PointInfo } from "types/Point";

interface PopupInterface {
  marker: PointInfo;
  type: string;
}

const Popup: FC<PopupInterface> = ({ marker, type }) => {
  const GoogleMapURL = new URL("https://www.google.com/maps/@");
  GoogleMapURL.searchParams.append("api", "1");
  GoogleMapURL.searchParams.append("map_action", "pano");
  GoogleMapURL.searchParams.append("parameters", "");
  GoogleMapURL.searchParams.append("viewpoint", `${marker.lat},${marker.lng}`);

  return (
    <div>
      種別: {type}
      <br />
      施設名: {marker.name}
      <br />
      住所: {marker.details.address}
      <br />
      電話番号: {marker.details.phone_number}
      <br />
      <a
        href={GoogleMapURL.toString()}
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Map
      </a>
    </div>
  );
};
export default Popup;
