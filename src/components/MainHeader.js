import { useState } from "react";
import useMapPlaces from "../hooks/useMapPlaces";
import NewPlace from "./NewPlace";

const MainHeader = () => {
  const [addMode, setAddMode] = useState(false);
  const { places, removePlace, focused, focusPlace } = useMapPlaces();
  return (
    <header className="main-header">
      {focused ? (
        <>
          <h1>{focused.name}</h1>
          <p>{focused.notes}</p>
          <button onClick={() => focusPlace(null)}>Volver</button>
        </>
      ) : (
        <>
          <h1>My places</h1>
          <button onClick={() => setAddMode(true)}>Add New Place</button>

          {addMode ? <NewPlace setAddMode={setAddMode} /> : null}

          {places.length ? (
            <ul>
              {places.map((place) => (
                <li key={place.id}>
                  <p>{place.name}</p>
                  <button onClick={() => focusPlace(place)}>View</button>
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure?"))
                        removePlace(place.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No places stored yet.</p>
          )}
        </>
      )}
    </header>
  );
};

export default MainHeader;
