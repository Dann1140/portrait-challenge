import React from "react";
import { PlanetContext } from "../PlanetContext";
import "./PlanetSearch.css";

function PlanetSearch() {
  const { searchValue, setSearchValue } = React.useContext(PlanetContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Search for a Planet..."
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}
export { PlanetSearch };
