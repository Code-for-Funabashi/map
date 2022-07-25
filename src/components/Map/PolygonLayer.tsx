import { useState, useEffect } from "react";
import { Polygon } from "./Polygon";
import { PolygonInfo, PolygonMeta } from "types/Polygon";

import { loadFeatures } from "./util";

export const PolygonLayer = (polygonMeta: PolygonMeta) => {
  const [features, setFeatures] = useState<PolygonInfo[]>([]);
  useEffect(() => {
    loadFeatures<PolygonInfo>(polygonMeta.url).then((data) =>
      setFeatures(data)
    );
  }, [polygonMeta]);

  return features.map((feature, idx) => (
    <Polygon
      polygon={feature}
      type={polygonMeta.type}
      option={polygonMeta.option}
      // マルチポリゴンを使っていないためnameがユニークにならないので、idxを利用
      key={idx}
    />
  ));
};
