import { nanoid } from "nanoid";
import { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import useMapPlaces from "../hooks/useMapPlaces";
import {
  defaultCenter,
  defaultZoom,
  defaultTiles,
  defaultAttribution,
  defaultIcon,
} from "../helpers";

const NewPlaceLocationMarker = ({ marker, setMarker }) => {
  useMapEvents({
    click(e) {
      setMarker(e.latlng);
    },
  });

  return marker ? <Marker position={marker} icon={defaultIcon} /> : null;
};

const NewPlace = ({ setAddMode }) => {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [marker, setMarker] = useState(null); // {lat: ..., lng: ...}

  const { addPlace } = useMapPlaces();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    addPlace({
      id: nanoid(),
      name,
      notes,
      marker,
    });

    setAddMode(false);
  };

  return (
    <section className="new-place">
      <form onSubmit={handleFormSubmit}>
        <h1>Add new place to the map</h1>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            maxLength="60"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            value={notes}
            maxLength="200"
            required
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </fieldset>

        <p>Click location on the map below:</p>

        <section className="new-place-map">
          <MapContainer
            center={defaultCenter}
            zoom={defaultZoom}
            zoomControl={false}
          >
            <TileLayer url={defaultTiles} attribution={defaultAttribution} />

            <NewPlaceLocationMarker marker={marker} setMarker={setMarker} />
          </MapContainer>
        </section>
        <button disabled={!name || !notes || !marker}>Add Place</button>
      </form>
      <p className="new-place-close" onClick={() => setAddMode(false)}>
        Close
      </p>
    </section>
  );
};

export default NewPlace;
