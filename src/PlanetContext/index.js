import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const PlanetContext = React.createContext();

function PlanetProvider(props) {
  const {
    item: planet,
    saveItem: savePlanet,
    loading,
    error,
  } = useLocalStorage("PLANET_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const totalPlanets = planet.length;

  let searchedPlanets = [];

  if (!searchValue.length >= 1) {
    searchedPlanets = planet;
  } else {
    searchedPlanets = planet.split(",");
    planet.filter((planet) => {
      const planetText = planet.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return planetText.includes(searchText);
    });
  }

  const deletePlanet = (text) => {
    const planetIndex = planet.findIndex((planet) => planet.text === text);
    const newPlanets = [...planet];
    newPlanets.splice(planetIndex, 1);
    savePlanet(newPlanets);
  };
  return (
    <PlanetContext.Provider
      value={{
        loading,
        error,
        totalPlanets,
        searchValue,
        setSearchValue,
        searchedPlanets,
        deletePlanet,
      }}
    >
      {props.children}
    </PlanetContext.Provider>
  );
}

export { PlanetContext, PlanetProvider };
