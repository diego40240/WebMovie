import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function BtnAgregar({ accion }) {
  return (
    <button
      className="rounded-full w-28 h-28 border-slate-500 border-2 flex justify-center items-center text-3xl"
      onClick={accion}
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}
