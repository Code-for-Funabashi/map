import axios from "axios";
import type { Icon } from "leaflet";
import { useState, useEffect } from "react";
import { Point } from "./Point";

export interface PointMeta {
  url: string;
  type: string;
  icon: Icon;
}

interface PointInfoDetail {
  address?: string;
  phone_number?: string;
}

export interface PointInfo {
  name: string;
  lat: number;
  lng: number;
  details: PointInfoDetail;
}

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
