import { latLngBounds } from "leaflet";
import { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { defaultIcon } from "../helpers";
import useMapPlaces from "../hooks/useMapPlaces";

const MapMarkers = () => {
  const { places, focused, focusPlace } = useMapPlaces();
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    if (focused) {
      map.flyTo(focused.marker, 12);
    } else {
      const markerBounds = latLngBounds(places.map((place) => place.marker));
      map.fitBounds(markerBounds);
    }
  }, [focused, map, places]);

  return places.map((place) => (
    <Marker
      key={place.id}
      position={place.marker}
      icon={defaultIcon}
      eventHandlers={{
        click() {
          focusPlace(place);
        },
      }}
    />
  ));
};

export default MapMarkers;
