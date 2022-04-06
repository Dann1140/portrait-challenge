import React from "react";
import "./App.css";
import { PlanetContext } from "../PlanetContext";
import { PlanetSearch } from "../PlanetSearch";
import { PlanetError } from "../PlanetError";
import { PlanetList } from "../PlanetList";
import { PlanetLoading } from "../PlanetLoading";
import { EmptyPlanet } from "../EmptyPlanet";
import { PlanetItem } from "../PlanetItem";

function AppUI() {
  const { error, loading, searchedPlanets, deletePlanet } =
    React.useContext(PlanetContext);
  return (
    <h1>hola mundo</h1>
    // <React.Fragment>
    //   <PlanetSearch />
    //   <PlanetList>
    //     {error && <PlanetError error={error} />}
    //     {loading && <PlanetLoading />}
    //     {!loading && !searchedPlanets.length && <EmptyPlanet />}

    //     {searchedPlanets.map((planet: { text: string }) => (
    //       <PlanetItem
    //         key={planet.text}
    //         text={planet.text}
    //         onDelete={() => deletePlanet(planet.text)}
    //       />
    //     ))}
    //   </PlanetList>
    // </React.Fragment>
  );
}

export default AppUI;
