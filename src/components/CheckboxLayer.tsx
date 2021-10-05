import { PointLayer, PointMeta } from "./PointLayer";
import { LayerGroup, LayersControl } from "react-leaflet";

export const CheckboxLayer = (pointMeta: PointMeta) => {
  return (
    <LayersControl.Overlay name={pointMeta.type} checked>
      <LayerGroup>{PointLayer(pointMeta)}</LayerGroup>
    </LayersControl.Overlay>
  );
};
