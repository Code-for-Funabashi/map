import { useState, useEffect } from "react";

import { PointInfo, PointMeta, NurserySchoolMeta } from "types/Point";

import { Point } from "./Point";
import { loadFeatures } from "./util";

export const PointLayer = (
  pointMeta: PointMeta,
  nurserySchoolMeta: NurserySchoolMeta
) => {
  const [features, setFeatures] = useState<PointInfo[]>([]);

  useEffect(() => {
    loadFeatures<PointInfo>(pointMeta.url).then((data) => setFeatures(data));
  }, [pointMeta]);

  return features.map((feature) => (
    <Point
      point={feature}
      type={pointMeta.type}
      icon={pointMeta.icon}
      nurserySchoolMeta={nurserySchoolMeta}
      key={feature.name}
    />
  ));
};
