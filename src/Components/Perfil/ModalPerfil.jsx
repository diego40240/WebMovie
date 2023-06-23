import React from "react";
import { colores, fotoPerfil } from "../../Variables/variables";
import BtnCerrar from "../Botones/BtnCerrar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
export function Avatar({ avatar, accion, color }) {
  return avatar !== null ? (
    <div
      className={
        "rounded-full w-28 h-28 border-2 flex justify-center items-center font-light text-[7rem] cursor-pointer bg-white " +
        color
      }
      onClick={accion}
    >
      <FontAwesomeIcon icon={avatar} />
    </div>
  ) : (
    <div
      className="rounded-full w-28 h-28 border-slate-500 border-2 flex justify-center items-center text-3xl cursor-pointer"
      onClick={accion}
    >
      <FontAwesomeIcon icon={faImage} />
    </div>
  );
}
export function ModalPerfil({ accion, cambioFoto }) {
  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full min-h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className=" relative w-[30%] h-[92%] min-h-fit max-h-screen bg-slate-900 flex flex-wrap justify-center items-center gap-5 py-4 px-12 font-medium rounded overflow-auto lista-favorito">
        <BtnCerrar accion={accion} className="m-4" />
        <h3 className="w-full text-center text-xl">Iconos</h3>

        {Object.entries(colores).map(([color, textColor]) =>
          Object.entries(fotoPerfil).map(([key, valor], index) => (
            <div
              key={index}
              onClick={cambioFoto}
              className={
                "rounded-full w-28 h-28 border-2 flex justify-center items-center font-light text-[7rem] cursor-pointer bg-white " +
                textColor
              }
            >
              <input type="hidden" name="color" value={color} />
              <input type="hidden" name="icono" value={key} />
              <FontAwesomeIcon
                icon={JSON.parse(valor)}
                className="pointer-events-none"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
