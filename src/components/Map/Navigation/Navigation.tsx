import React, { FC } from "react";

import Layers from "components/Map/Layers";

import scss from "./Navigation.module.scss";

const Navigation: FC = () => {
  return (
    <div className={scss.navigation}>
      <Layers />
    </div>
  );
};
export default Navigation;
