import axios from "axios";
import { useState, useEffect } from "react";
import { Area } from "./Polygon";
import { PolygonMeta, PolygonInfo } from "types/Polygon";

const loadFeatures = async (url: string) => {
  const res = await axios.get<PolygonInfo[]>(url);
  return res.data;
};

export const PolygonLayer = (polygonMeta: PolygonMeta) => {
  const [features, setFeatures] = useState<PolygonInfo[]>([]);
  useEffect(() => {
    loadFeatures(polygonMeta.url).then((data) => setFeatures(data));
  }, [polygonMeta]);

  return features.map((feature) => (
    <Area
      coordinates={feature.coordinates}
      name={feature.name}
      option={polygonMeta.option}
    />
  ));
};
