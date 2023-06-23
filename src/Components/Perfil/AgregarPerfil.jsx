import React from "react";
import { fotoPerfil, colores } from "../../Variables/variables";

import BtnAgregar from "../Botones/BtnAgregar";
import BtnCerrar from "../Botones/BtnCerrar";

import { useState } from "react";
import { Avatar, ModalPerfil } from "./ModalPerfil";
function FormularioCrearPerfil({ accion }) {
  const [modalImg, setModalImg] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [nombreAvatar, setNombreAvatar] = useState(null);
  const [color, setColor] = useState(null);

  function cambioFoto(e) {
    const newAvatar = e.target.childNodes[1].value;
    const newColor = e.target.childNodes[0].value;
    setNombreAvatar(newAvatar);
    setAvatar(JSON.parse(fotoPerfil[newAvatar]));
    setColor(colores[newColor]);
    mostrarModal();
  }

  function mostrarModal() {
    setModalImg(!modalImg);
  }
  return (
    <form
      onSubmit={accion}
      className="w-full h-full flex flex-wrap flex-col items-center justify-center gap-5"
    >
      <Avatar avatar={avatar} accion={mostrarModal} color={color} />

      {modalImg && (
        <ModalPerfil accion={mostrarModal} cambioFoto={cambioFoto} />
      )}

      {color !== null && avatar !== null && (
        <>
          <input type="hidden" name="color" value={color} />
          <input type="hidden" name="icono" value={nombreAvatar} />
        </>
      )}

      <input
        type="text"
        name="nombre"
        placeholder="nombre"
        className="text-white bg-transparent w-full h-10 py-4 px-4 outline-none outline-slate-600 focus:outline-slate-500 outline-offset-1 rounded"
        autoComplete="off"
      />

      <button type="submit" className="bg-slate-500 w-full rounded py-1">
        Crear
      </button>
    </form>
  );
}

export function AgregarPerfil({ abrirCrear, usuario, nuevoUsuario }) {
  return (
    <div className="relative flex flex-col justify-center items-center gap-4">
      {nuevoUsuario ? (
        <>
          <BtnCerrar accion={abrirCrear} />

          <FormularioCrearPerfil accion={usuario} />
        </>
      ) : (
        <>
          <BtnAgregar accion={abrirCrear} />

          <h3 className="">Agregar perfil</h3>
        </>
      )}
    </div>
  );
}
