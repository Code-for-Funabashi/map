import React, {
  FC,
  useState,
  useEffect,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { useMap } from "react-leaflet";
import L, { Marker, LayerGroup } from "leaflet";
import axios from "axios";

import { PointInfo, PointMeta } from "types/Point";

import { points } from "data/points/points";

const Layers: FC = () => {
  const map = useMap();
  const [layerGroups, setLayerGroups] = useState<{ [key: string]: LayerGroup }>(
    {}
  );
  const [layerGroupKeys, setLayerGroupKeys] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    Promise.all(
      points().map((point: PointMeta) => {
        return axios.get<[PointInfo]>(point.url);
      })
    ).then((responses) => {
      const types: { [key: string]: boolean } = {};
      const groups: { [key: string]: LayerGroup } = {};
      responses.forEach((response, index) => {
        const type = points()[index].type;
        types[type] = true;

        const markers: Marker[] = [];
        response.data.forEach((marker: PointInfo) => {
          const base_url =
            "https://www.google.com/maps/@?api=1&map_action=pano&parameters&viewpoint=";

          let HTML = "";
          HTML += `種別: ${type}<br />`;
          HTML += `施設名: ${marker.name}<br />`;
          HTML += `住所: ${marker.details.address}<br />`;
          HTML += `電話番号: ${marker.details.phone_number}<br />`;
          HTML += `<a href="${base_url}${marker.lat},${marker.lng}" target="_blank" rel="noopener noreferrer">Google Map</a>`;

          markers.push(
            L.marker([marker.lat, marker.lng], {
              icon: points()[index].icon,
            }).bindPopup(HTML)
          );
        });

        groups[type] = L.layerGroup(markers).addTo(map);
      });

      setLayerGroupKeys(types);
      setLayerGroups(groups);
    });
  }, [map]);

  useEffect(() => {
    Object.keys(layerGroupKeys).forEach((key) => {
      if (layerGroups[key] !== undefined) {
        map.removeLayer(layerGroups[key]);
        if (layerGroupKeys[key]) map.addLayer(layerGroups[key]);
      }
    });
  }, [map, layerGroupKeys, layerGroups]);

  return (
    <>
      {Object.keys(layerGroups).map((key, index) => {
        return (
          <label key={index}>
            <input
              type="checkbox"
              value={key}
              checked={layerGroupKeys[key] ?? true}
              onChange={(e) => checkBoxClickHandler(e, setLayerGroupKeys)}
            />
            <span />
            {key}
          </label>
        );
      })}
    </>
  );
};
export default Layers;

const checkBoxClickHandler = (
  e: ChangeEvent<HTMLInputElement>,
  setActiveKeys: Dispatch<SetStateAction<{ [key: string]: boolean }>>
) => {
  setActiveKeys((prevState) => {
    return {
      ...prevState,
      [e.target.value]: e.target.checked,
    };
  });
};
