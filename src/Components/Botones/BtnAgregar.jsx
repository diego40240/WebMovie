import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function BtnAgregar({ accion }) {
  return (
    <button
      className="rounded-full w-24 h-24 max-[350px]:w-20 max-[350px]:h-20 lg:w-40 lg:h-40 border-slate-500 border-2 flex justify-center items-center text-4xl lg:text-5xl"
      onClick={accion}
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}
