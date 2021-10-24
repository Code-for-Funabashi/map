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
    </div>
  );
};
export default Navigation;
