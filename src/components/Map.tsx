import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { PointLayer, PointMeta } from "./PointLayer";
import { greenIcon } from "./Icons";

// XXX: データがmainにマージされたらmainブランチを参照するようにする。
// FIXME: 複数のtypeで位置情報が一致すると画面上わからなくなる。
const pointCatalog: PointMeta[] = [
  {
    url:
      "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/main/data/kosodate-map/syokibohoikuichiran.json",
    type: "小規模保育園",
    icon: greenIcon,
  },
  {
    url:
      "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/main/data/kosodate-map/korituhoikusyoitiran.json",
    type: "公立保育園",
    icon: greenIcon,
  },
  {
    url:
      "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/main/data/kosodate-map/sirituhoikusyoitiran.json",
    type: "私立保育園",
    icon: greenIcon,
  },
  {
    url:
      "https://raw.githubusercontent.com/Code-for-Funabashi/open-data-parser/main/data/kosodate-map/ninteikodomoenitiran.json",
    type: "認定こども園",
    icon: greenIcon,
  },
];

//船橋市役所のlat lon
const position: [number, number] = [35.694722, 139.9825];

const KosodateMap = () => {
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
      {pointCatalog.map((item) => PointLayer(item))}
    </MapContainer>
  );
};

export default KosodateMap;
