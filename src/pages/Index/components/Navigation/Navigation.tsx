import React, { FC } from "react";

import Layers from "pages/Index/components/Layers";

import scss from "./Navigation.module.scss";

const Navigation: FC = () => {
  return (
    <div className={scss.navigation}>
      <Layers />
      <div className={scss.layers}>
        <Layers />
      </div>
    </div>
  );
};
export default Navigation;
