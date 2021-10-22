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

import scss from "./Navigation.module.scss";

import { points } from "data/points/points";

const Navigation: FC = () => {
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
      responses.forEach((response, index) => {
        const type = points()[index].type;

        const markers: Marker[] = [];
        response.data.forEach((marker: PointInfo) => {
          const name = marker.name;
          const address = marker.details.address;
          const phone = marker.details.phone_number;
          const HTML = `種別: ${type}<br />名前: ${name}<br />住所: ${address}<br />電話番号: ${phone}`;

          markers.push(
            L.marker([marker.lat, marker.lng], {
              icon: points()[index].icon,
            }).bindPopup(HTML)
          );
        });

        setLayerGroups((prevState) => {
          return {
            ...prevState,
            [type]: L.layerGroup(markers).addTo(map),
          };
        });

        setLayerGroupKeys((prevState) => {
          return {
            ...prevState,
            type: true,
          };
        });
      });
    });
  }, [map]);

  console.log(setLayerGroupKeys);

  return (
    <div className={scss.navigation}>
      {Object.keys(layerGroups).map((key, index) => {
        return (
          <label key={index}>
            {key}
            <input
              type="checkbox"
              value={key}
              onChange={(e) => checkBoxClickHandler(e, setLayerGroupKeys)}
              checked={layerGroupKeys[key]}
              key={Math.random()}
            />
          </label>
        );
      })}
    </div>
  );
};
export default Navigation;

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
