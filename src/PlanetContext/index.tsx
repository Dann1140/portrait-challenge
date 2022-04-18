import React from "react";
import { planetsApi } from "./axiosclient";

export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  url: string;
};

interface IPlanetContext {
  addPlanets: (newPlanets: Array<Planet>) => void;
  searchPlanets?: (searchTerm: string) => Promise<Array<Planet>>;
  deletePlanet: (name: string) => void;
  savedPlanets: Array<Planet>;
}

export const PlanetContext = React.createContext<IPlanetContext>({
  savedPlanets: [],
  addPlanets: () => {},
  deletePlanet: () => {},
});
export const PlanetProvider: React.FC<{ children: Array<JSX.Element> }> =
  function ({ children }) {
    const [savedPlanets, setSavedPlanets] = React.useState<Array<Planet>>([]);

    const searchPlanets = async (
      searchTerm: string
    ): Promise<Array<Planet>> => {
      const response = await planetsApi.get(`/planets?search=${searchTerm}`);
      return response.data.results;
    };

    const deletePlanet = (text: string) => {
      const newPlanetArray = savedPlanets.filter(
        (planet) => planet.name !== text
      );
      setSavedPlanets(newPlanetArray);
    };

    const addPlanets = (newPlanets: Array<Planet>) => {
      const newPlanetsArray = [...savedPlanets, ...newPlanets];
      setSavedPlanets(newPlanetsArray);
    };

    return (
      <PlanetContext.Provider
        value={{
          savedPlanets,
          deletePlanet,
          searchPlanets,
          addPlanets: addPlanets,
        }}
      >
        {children}
      </PlanetContext.Provider>
    );
  };
