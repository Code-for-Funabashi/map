import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LOGO from "./logo.svg";
import { iconPerson } from "./Icon";

// import LocateControl from "./LocateControl"
Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/";

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
          if (Math.random() > 0.2) {
            return (
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            );
          }
          return (
            <Marker position={position} icon={iconPerson}>
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

interface Props {}

interface State {
  editingUserName: string;
  facilityList: Array<any>;
}

const CustomNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <img src={LOGO} width="30" height="30" alt="React Bootstrap logo" />
      <Nav className="mr-auto">
        <Nav.Link href="#保育園">Home</Nav.Link>
        <Nav.Link href="#幼稚園">Features</Nav.Link>
        <Nav.Link href="#小児科">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const defaultUserName = "defaultUserName";
    this.state = {
      facilityList: [
        [35.694722, 139.9925],
        [35.694722, 139.9725],
        [35.682722, 139.9525],
      ],
      editingUserName: defaultUserName,
    };
  }
  public render() {
    return (
      <>
        <CustomNavBar />
        <Map facilityList={this.state.facilityList} />
      </>
    );
  }
}
