import axios from "axios";
import { useState, useEffect } from "react";

import { PointInfo, PointMeta } from "types/Point";

import { Point } from "./Point";

const loadFeatures = async (url: string) => {
  const res = await axios.get<[PointInfo]>(url);
  return res.data;
};

export const PointLayer = (pointMeta: PointMeta) => {
  const [features, setFeatures] = useState<PointInfo[]>([]);

  useEffect(() => {
    loadFeatures(pointMeta.url).then((data) => setFeatures(data));
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
