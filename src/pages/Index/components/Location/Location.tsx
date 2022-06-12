import React, { FC, useState, useEffect } from "react";
import { useMap } from "react-leaflet";
import { LatLngExpression } from "leaflet";

import { position as cityOfficePosition } from "pages/Index/Index";

import scss from "./Location.module.scss";

const Location: FC = () => {
  const [position, setPosition] = useState<[LatLngExpression, number]>([
    cityOfficePosition,
    13,
  ]);
  const [className, setClassName] = useState<string>(scss.modal);
  const map = useMap();

  const onClickHandler = () => {
    setClassName(scss.modal + " " + scss.view);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        setPosition([[lat, lng], 16]);
        setClassName(scss.modal);
      },
      () => {
        const ua = navigator.userAgent;

        if (/iPad|iPhone|iPod/.test(ua)) {
          alert(
            "位置情報の取得に失敗しました。\n\n意図せず失敗する場合は、設定 > プライバシー > 位置情報サービス > SafariのWebサイトで、「次回、または共有時に確認」に変更してください。"
          );
        } else {
          alert("位置情報の取得に失敗しました。\n設定をご確認ください。");
        }

        setClassName(scss.modal);
      }
    );
  };

  useEffect(() => {
    map.setView(position[0], position[1]);
  }, [map, position]);

  return (
    <>
      <button className={scss.button} onClick={onClickHandler}>
        現在地へ
      </button>
      <div className={className}>
        位置情報の取得を許可していただくと、現在地まで自動的に移動します。
        <br />
        処理に時間がかかる場合があります。
        <br />
        位置情報はサーバーには送信されません。
      </div>
    </>
  );
};
export default Location;