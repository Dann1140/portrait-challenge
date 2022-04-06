import React from "react";
import "./PlanetLoading.css";

function PlanetLoading() {
  return (
    <div className="LoadingPlanet-container">
      <p className="LoadingPlanet-text">Searching...</p>
      <span className="LoadingPlanet-deleteIcon"></span>
    </div>
  );
}

export { PlanetLoading };
