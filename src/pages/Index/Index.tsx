import React, { FC } from "react";

import { PointMeta } from "types/Point";
import { PolygonMeta } from "types/Polygon";

import Map from "components/Map/Map";
import { greenIcon, blueIcon } from "components/Map/Icons";

import "styles/full-screen.scss";

const pointCatalog: PointMeta[] = [
  {
    url: "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/feature/acceptable-number/data/kosodate-map/hoikuen.json",
    type: "保育園",
    icon: greenIcon,
  },
  {
    // TODO: マージしたら向き先修正
    url: "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/feature/acceptable-number/data/kosodate-map/kouminkan.json",
    type: "公民館",
    icon: blueIcon,
  },
];

const polygonCatalog: PolygonMeta[] = [
  {
    url: "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/main/data/kosodate-map/gakku.json",
    type: "小学校区",
    option: { color: "purple" },
  },
];

const inputMetaUrl =
  "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/main/data/meta.json";

const Index: FC = () => {
  return (
    <Map
      pointCatalog={pointCatalog}
      polygonCatalog={polygonCatalog}
      inputMetaUrl={inputMetaUrl}
    />
  );
};
export default Index;
