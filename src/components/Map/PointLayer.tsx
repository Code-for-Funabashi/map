import { useState, useEffect } from "react";

import { PointInfo, PointMeta } from "types/Point";

import { Point } from "./Point";
import { loadFeatures } from "./util";

export const PointLayer = (pointMeta: PointMeta, hoikuen_yearmonth: string) => {
  const [features, setFeatures] = useState<PointInfo[]>([]);

  useEffect(() => {
    loadFeatures<PointInfo>(pointMeta.url).then((data) => setFeatures(data));
  }, [pointMeta]);

  return features.map((feature) => (
    <Point
      point={feature}
      type={pointMeta.type}
      icon={pointMeta.icon}
      hoikuen_yearmonth={hoikuen_yearmonth}
      key={feature.name}
    />
  ));
};
