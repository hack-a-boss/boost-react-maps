import { useContext } from "react";
import { PlacesContext } from "../context/PlacesContext";

const useMapPlaces = () => {
  const { places, setPlaces, focused, setFocused } = useContext(PlacesContext);

  const addPlace = (place) => {
    setPlaces([place, ...places]);
  };

  const removePlace = (id) => {
    setPlaces(places.filter((place) => place.id !== id));
  };

  const focusPlace = (place) => setFocused(place);

  return {
    places,
    addPlace,
    removePlace,
    focused,
    focusPlace,
  };
};

export default useMapPlaces;
