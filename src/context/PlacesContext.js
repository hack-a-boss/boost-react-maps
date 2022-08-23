import { createContext, useEffect, useState } from "react";

export const PlacesContext = createContext();

export const PlacesContextProvider = ({ children }) => {
  const localData = localStorage.getItem("places");

  const [places, setPlaces] = useState(localData ? JSON.parse(localData) : []);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    localStorage.setItem("places", JSON.stringify(places));
  }, [places]);

  return (
    <PlacesContext.Provider
      value={{
        places,
        setPlaces,
        focused,
        setFocused,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
