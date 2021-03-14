import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// import LocateControl from "./LocateControl"
Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/";

const facility_list = [
  [35.693722, 139.9825],
  [35.695722, 139.9825],
];
//船橋市役所のlat lon
const position: [number, number] = [35.694722, 139.9825];
const Map = (props: any) => {
  // prop引数を追加して
  // TODO: propにarray listとして施設地点の経度緯度、hovering時に表示したい情報を付与する
  // prop.facilityList
  // prop.facilityList.map(() => {
  //  return <Marker position={position}>
  //      <Popup>
  //      A pretty CSS3 popup. <br /> Easily customizable.
  //    </Popup>
  //  </Marker>}
  // leaflet locate機能をどう実装するか？
  // いらない気がしてきた。一応勉強でメモしておくけど。
  // https://stackoverflow.com/questions/54099898/react-locate-on-map
  const facilityList = props.facilityList;
  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "30vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {facilityList.map((position: any) => {
          return (
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};

const App = () => {
  return (
    <>
      <Map facilityList={facility_list} />
    </>
  );
};
export default App;
