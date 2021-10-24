import React, {
  FC,
  useState,
  useEffect,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";
import ReactDOMServer from "react-dom/server";
import { useMap } from "react-leaflet";
import L, { Marker, LayerGroup } from "leaflet";
import axios from "axios";

import { PointInfo, PointMeta } from "types/Point";

import Popup from "./Popup";

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
          markers.push(
            L.marker([marker.lat, marker.lng], {
              icon: points()[index].icon,
            }).bindPopup(
              ReactDOMServer.renderToString(
                <Popup marker={marker} type={type} />
              )
            )
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
