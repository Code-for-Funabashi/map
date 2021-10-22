import { PointMeta } from "types/Point";

import { blueIcon, greenIcon } from "components/Map/Icons";

import json from "./points.json";

export const points = (): PointMeta[] => {
  return json.map((datum) => {
    return {
      ...datum,
      icon: datum.icon === "blue" ? blueIcon : greenIcon,
    };
  });
};
