import React, { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import Navigation from "./components/Navigation/Navigation";
import Attribution from "./components/Attribution";

import "leaflet/dist/leaflet.css";
import "styles/full-screen.scss";

//船橋市役所のlat lon
export const position: [number, number] = [35.694722, 139.9825];

const Index: FC = () => {
  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        tap={false} // to support safari https://github.com/Leaflet/Leaflet/issues/7266
        scrollWheelZoom={true}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution={Attribution()}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Navigation />
      </MapContainer>
    </>
  );
};
export default Index;
