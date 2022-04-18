import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Planet } from "../PlanetContext";
type PlanetItemProps = {
  planet: Planet;
  onDelete: () => void;
};
export function PlanetItem(props: PlanetItemProps) {
  return (
    <Card sx={{ minWidth: 275, width: 500, backgroundColor: "black" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
          Planet
        </Typography>
        <Typography color="primary" variant="h5" component="div">
          {props.planet.name}
        </Typography>
        <Typography color="primary" variant="body2">
          Rotation Period:{props.planet.rotation_period}
        </Typography>
        <Typography color="primary" variant="body2">
          Orbital Period:{props.planet.orbital_period}
        </Typography>
        <Typography color="primary" variant="body2">
          Diameter:{props.planet.diameter}
        </Typography>
        <Typography color="primary" variant="body2">
          Climate:{props.planet.climate}
        </Typography>
        <Typography color="primary" variant="body2">
          Gravity:{props.planet.gravity}
        </Typography>
        <Typography color="primary" variant="body2">
          Terrain:{props.planet.terrain}
        </Typography>
        <Typography color="primary" variant="body2">
          Surface Water:{props.planet.surface_water}
        </Typography>
        <Typography color="primary" variant="body2">
          Population:{props.planet.population}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" size="small" onClick={props.onDelete}>
          Delete Planet
        </Button>
      </CardActions>
    </Card>
  );
}
