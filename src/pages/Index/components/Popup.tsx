import React, { FC } from "react";

interface PopupInterface {
  lat: number;
  lng: number;
  type: string;
  name: string;
  address?: string;
  phone_number?: string;
}

const Popup: FC<PopupInterface> = ({
  lat,
  lng,
  type,
  name,
  address,
  phone_number,
}) => {
  const GoogleMapURL = new URL("https://www.google.com/maps/@");
  GoogleMapURL.searchParams.append("api", "1");
  GoogleMapURL.searchParams.append("map_action", "pano");
  GoogleMapURL.searchParams.append("parameters", "");
  GoogleMapURL.searchParams.append("viewpoint", `${lat},${lng}`);

  return (
    <div>
      種別: {type}
      <br />
      施設名: {name}
      <br />
      住所: {address}
      <br />
      電話番号: {phone_number}
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
