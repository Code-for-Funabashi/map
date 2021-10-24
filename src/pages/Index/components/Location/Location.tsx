import React, { FC, useState, useEffect } from "react";
import { useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";

import scss from "./Location.module.scss";

const Location: FC = () => {
  const [position, setPosition] = useState<LatLngExpression>([
    35.694722, 139.9825,
  ]);
  const [className, setClassName] = useState<string>(scss.modal);
  const map = useMap();

  const onClickHandler = () => {
    setClassName(scss.modal + " " + scss.view);
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      setPosition([lat, lng]);
      setClassName(scss.modal);
    });
  };

  useEffect(() => {
    map.setView(position);
  }, [map, position]);

  return (
    <>
      <button className={scss.button} onClick={onClickHandler}>
        現在位置に移動する
      </button>
      <div className={className}>
        位置情報取得の許可を押していただくと現在地まで自動的に移動します。
        <br />
        しばらく処理に時間がかかります。
        <br />
        位置情報はサーバーには送信されません。
      </div>
    </>
  );
};
export default Location;
