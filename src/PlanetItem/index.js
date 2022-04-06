import React from "react";
import "./PlanetItem.css";
import { MdCancel } from "react-icons/md";

function PlanetItem(props) {
  return (
    <li className="PlanetItem">
      <p>{props.text}</p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <MdCancel />
      </span>
    </li>
  );
}

export { PlanetItem };
