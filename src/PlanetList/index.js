import React from "react";
import "./PlanetList.css";

function PlanetList(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { PlanetList };
