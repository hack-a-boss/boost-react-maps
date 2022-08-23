import Leaflet from "leaflet";
import icon from "./img/marker-icon.png";

export const defaultIcon = Leaflet.icon({
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
  iconUrl: icon,
});

export const defaultTiles = process.env.REACT_APP_MAP_TILES;
export const defaultAttribution = process.env.REACT_APP_MAP_ATTRIBUTION;
export const defaultCenter =
  process.env.REACT_APP_MAP_DEFAULT_CENTER.split(",");
export const defaultZoom = Number(process.env.REACT_APP_MAP_DEFAULT_ZOOM);
