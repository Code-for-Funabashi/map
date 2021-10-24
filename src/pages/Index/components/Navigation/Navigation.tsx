import React, { FC, useEffect } from "react";
import L from "leaflet";

import Layers from "pages/Index/components/Layers";

import scss from "./Navigation.module.scss";

const Navigation: FC = () => {
  useEffect(() => {
    L.DomEvent.disableClickPropagation(
      document.getElementsByClassName(scss.navigation)[0] as HTMLElement
    );
  }, []);

  return (
    <div className={scss.navigation}>
      <div className={scss.app_name}>
        <span>船橋市子育て</span>
        <span>地域マップ</span>
      </div>

      <div className={scss.layers}>
        <Layers />
      </div>

      <div className={scss.copyright}>
        データ出典元
        <p>
          <a href="https://www.city.funabashi.lg.jp/shisei/toukei/002/opendata.html">
            船橋データカタログ（船橋市作成）
          </a>
          <br />
          <a href="https://creativecommons.org/licenses/by/4.0/deed.ja">
            CC BY 4.0
          </a>
        </p>
      </div>
    </div>
  );
};
export default Navigation;
