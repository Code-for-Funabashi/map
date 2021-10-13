import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PointLayer, PointMeta } from "./PointLayer";

//船橋市役所のlat lon
const position: [number, number] = [35.694722, 139.9825];

const Map = (props: { pointCatalog: PointMeta[] }) => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      tap={false} // to support safari https://github.com/Leaflet/Leaflet/issues/7266
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors | <a href="http://code4funabashi.org/">CodeForFunabashi</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayersControl position="topright">
        {props.pointCatalog.map((item, index) => {
          return (
            <LayersControl.Overlay name={item.type} key={index} checked>
              <LayerGroup>{PointLayer(item)}</LayerGroup>
            </LayersControl.Overlay>
          );
        })}
      </LayersControl>
    </MapContainer>
  );
};

export default Map;
