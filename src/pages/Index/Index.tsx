import React, { FC } from "react";

import { PointMeta } from "types/Point";
import { PolygonMeta } from "types/Polygon";

import Map from "components/Map/Map";
import { greenIcon, blueIcon } from "components/Map/Icons";

import "styles/full-screen.scss";

const pointCatalog: PointMeta[] = [
  {
    url: "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/main/data/kosodate-map/syokibohoikuichiran.json",
    type: "小規模保育園",
    icon: greenIcon,
  },
  {
    url: "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/main/data/kosodate-map/korituhoikusyoitiran.json",
    type: "公立保育園",
    icon: greenIcon,
  },
  {
    url: "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/main/data/kosodate-map/sirituhoikusyoitiran.json",
    type: "私立保育園",
    icon: greenIcon,
  },
  {
    url: "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/main/data/kosodate-map/ninteikodomoenitiran.json",
    type: "認定こども園",
    icon: greenIcon,
  },
  {
    url: "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/main/data/kosodate-map/kouminkan.json",
    type: "公民館",
    icon: blueIcon,
  },
];

const polygonCatalog: PolygonMeta[] = [
  {
    url: "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/feature/add-gakku/data/kosodate-map/gakku.json",
    type: "小学校区",
    option: { color: "purple" },
  },
];

const Index: FC = () => {
  return <Map pointCatalog={pointCatalog} polygonCatalog={polygonCatalog} />;
};
export default Index;
