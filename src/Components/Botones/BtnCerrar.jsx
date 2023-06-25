import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function BtnCerrar({ accion, className }) {
  return (
    <button
      onClick={accion}
      className={"absolute top-0 right-0 text-xl " + className}
      type="button"
    >
      <FontAwesomeIcon icon={faXmark} />
    </button>
  );
}
