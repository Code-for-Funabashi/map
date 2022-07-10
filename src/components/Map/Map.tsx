import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { PointMeta } from "types/Point";
import { PolygonMeta } from "types/Polygon";
import { InputDataMeta } from "types/Meta";

import { PointLayer } from "./PointLayer";
import { PolygonLayer } from "./PolygonLayer";

import { loadFeature } from "./util";

//船橋市役所のlat lon
const position: [number, number] = [35.694722, 139.9825];

const Map = (props: {
  pointCatalog: PointMeta[];
  polygonCatalog: PolygonMeta[];
  inputMetaUrl: string;
}) => {
  const [metadata, setMetadata] = useState<InputDataMeta>({
    hoikuen_yearmonth: "000000",
  });

  useEffect(() => {
    loadFeature<InputDataMeta>(props.inputMetaUrl).then((data) =>
      setMetadata(data)
    );
  });
  return (
    <MapContainer
      center={position}
      zoom={13}
      tap={false} // to support safari https://github.com/Leaflet/Leaflet/issues/7266
      scrollWheelZoom={true}
      style={{ height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | <a href="http://code4funabashi.org/">CodeForFunabashi</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayersControl position="topright">
        {props.pointCatalog.map((item, index) => {
          return (
            <LayersControl.Overlay name={item.type} key={index} checked>
              <LayerGroup>
                {PointLayer(item, metadata.hoikuen_yearmonth)}
              </LayerGroup>
            </LayersControl.Overlay>
          );
        })}
        {props.polygonCatalog.map((item, index) => {
          return (
            <LayersControl.Overlay name={item.type} key={index} checked>
              <LayerGroup>{PolygonLayer(item)}</LayerGroup>
            </LayersControl.Overlay>
          );
        })}
      </LayersControl>
    </MapContainer>
  );
};

export default Map;
