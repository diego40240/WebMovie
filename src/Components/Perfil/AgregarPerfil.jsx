import React from "react";
import { fotoPerfil, colores } from "../../Variables/variables";

import BtnAgregar from "../Botones/BtnAgregar";
import BtnCerrar from "../Botones/BtnCerrar";

import { useState } from "react";
import { Avatar, ModalPerfil } from "./ModalPerfil";

function FormularioCrearPerfil({ accion, abrirCrear }) {
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
    <section className="fixed z-50 top-0 left-0 w-full h-full min-h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={accion}
        className="w-[90%] lg:w-[30%] 2xl:w-[17%] sm:w-[50%] lg:py-6 h-fit flex flex-wrap flex-col items-center justify-center gap-5 relative bg-slate-900 px-6 py-10 rounded-md"
      >
        <BtnCerrar accion={abrirCrear} className={"mx-3 my-2"} />
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
          className="text-white bg-transparent w-full h-10 py-4 px-4 outline-none outline-slate-600 focus:outline-slate-500 outline-offset-1 rounded hover:bg-slate-500 hover:bg-opacity-10"
          autoComplete="off"
        />

        <button
          type="submit"
          className="bg-slate-500 w-full rounded py-1 hover:bg-opacity-80"
        >
          Crear
        </button>
      </form>
    </section>
  );
}

export function AgregarPerfil({ abrirCrear, usuario, nuevoUsuario }) {
  return (
    <div className="relative flex flex-col justify-center items-center gap-4 flex-1 ">
      {nuevoUsuario ? (
        <>
          <BtnCerrar accion={abrirCrear} />

          <FormularioCrearPerfil accion={usuario} abrirCrear={abrirCrear} />
        </>
      ) : (
        <div className="rounded-md p-2 w-full h-full flex flex-col gap-4 items-center hover:bg-slate-500 hover:bg-opacity-10 transition ease-in-out duration-300">
          <BtnAgregar accion={abrirCrear} />

          <h3 className="cursor-pointer">Agregar perfil</h3>
        </div>
      )}
    </div>
  );
}
