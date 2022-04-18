import React from "react";
import { PlanetContext, Planet } from "../PlanetContext";
import "./PlanetList.css";
import { EmptyPlanet } from "../EmptyPlanet";
import { PlanetItem } from "../PlanetItem";
import Stack from "@mui/material/Stack";

function PlanetList() {
  const { savedPlanets, deletePlanet } = React.useContext(PlanetContext);
  return (
    <section>
      {savedPlanets.length ? (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {savedPlanets.map((planet: Planet) => (
            <PlanetItem
              key={planet.name}
              planet={planet}
              onDelete={() => deletePlanet(planet.name)}
            />
          ))}
        </Stack>
      ) : (
        <EmptyPlanet />
      )}
    </section>
  );
}

export { PlanetList };
