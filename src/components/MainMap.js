import { MapContainer, TileLayer } from "react-leaflet";
import {
  defaultAttribution,
  defaultCenter,
  defaultTiles,
  defaultZoom,
} from "../helpers";
import MapMarkers from "./MapMarkers";

const MainMap = () => {
  return (
    <section className="main-map">
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        zoomControl={true}
        scrollWheelZoom={false}
      >
        <TileLayer url={defaultTiles} attribution={defaultAttribution} />

        <MapMarkers />
      </MapContainer>
    </section>
  );
};

export default MainMap;
