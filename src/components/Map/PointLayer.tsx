import { useState, useEffect } from "react";

import { PointInfo, PointMeta } from "types/Point";

import { Point } from "./Point";
import { loadFeatures } from "./util";

export const PointLayer = (pointMeta: PointMeta) => {
  const [features, setFeatures] = useState<PointInfo[]>([]);

  useEffect(() => {
    loadFeatures<PointInfo>(pointMeta.url).then((data) => setFeatures(data));
  }, [pointMeta]);

  return features.map((feature) => (
    <Point
      point={feature}
      type={pointMeta.type}
      icon={pointMeta.icon}
      key={feature.name}
    />
  ));
};
