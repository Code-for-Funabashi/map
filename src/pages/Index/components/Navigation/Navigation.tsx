import React, { FC, useEffect, useState } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

import Layers from "pages/Index/components/Layers";
import Location from "pages/Index/components/Location/Location";
import About from "pages/Index/components/About/About";

import scss from "./Navigation.module.scss";

const Navigation: FC = () => {
  const map = useMap();

  const [className, setClassName] = useState<string>("");

  useEffect(() => {
    L.DomEvent.disableClickPropagation(
      document.getElementsByClassName(scss.navigation)[0] as HTMLElement
    );

    map.on("dragstart", () => {
      setClassName(scss.transparent);
    });

    map.on("dragend", () => {
      setClassName("");
    });
  }, [map]);

  return (
    <div className={scss.navigation + " " + className}>
      <div className={scss.app_name}>
        <span>船橋市子育て</span>
        <span>地域マップ</span>
      </div>

      <div className={scss.layers}>
        <Layers />
      </div>

      <div className={scss.location}>
        <Location />
      </div>

      <div className={scss.copyright}>
        データ出典元
        <p>
          <a href="https://www.city.funabashi.lg.jp/shisei/toukei/002/opendata.html">
            船橋データカタログ
            <br />
            船橋市作成
          </a>
          <br />
          <a href="https://creativecommons.org/licenses/by/4.0/deed.ja">
            CC BY 4.0
          </a>
        </p>
      </div>

      <div className={scss.about}>
        <About />
      </div>
    </div>
  );
};
export default Navigation;
