import React, { FC, useState, useEffect } from "react";
import { useMap } from "react-leaflet";
import L, { Marker, LayerGroup } from "leaflet";
import { PointInfo, PointMeta } from "../../types/Point";
import { blueIcon, greenIcon } from "./Icons";
import axios from "axios";

const Navigation: FC = () => {
  const map = useMap();
  const [layerGroups, setLayerGroups] = useState<{ [key: string]: LayerGroup }>(
    {}
  );

  useEffect(() => {
    Object.keys(layerGroups).forEach((key) => {
      const layerGroup = layerGroups[key];
      layerGroup.addTo(map);
    });
  }, [layerGroups, map]);

  useEffect(() => {
    pointsCatalog.forEach((point: PointMeta) => {
      axios.get<[PointInfo]>(point.url).then((res) => {
        const markers: Marker[] = [];
        res.data.forEach((marker: PointInfo) => {
          const type = point.type;
          const name = marker.name;
          const address = marker.details.address;
          const phone = marker.details.phone_number;
          const HTML = `種別: ${type}<br />名前: ${name}<br />住所: ${address}<br />電話番号: ${phone}`;

          markers.push(
            L.marker([marker.lat, marker.lng], { icon: blueIcon }).bindPopup(
              HTML
            )
          );
        });
        setLayerGroups((prevState) => {
          return {
            ...prevState,
            [point.type]: L.layerGroup(markers),
          };
        });
      });
    });
  }, []);

  return <div></div>;
};
export default Navigation;

const pointsCatalog: PointMeta[] = [
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
