import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCrearPerfil } from "../../Hooks/useCrearPerfil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { colores, fotoPerfil } from "../../Variables/variables";
import { ModalPerfil } from "./ModalPerfil";

function FormularioEditarPerfil({ editarUsuario, nombre, id, color, icono }) {
  const [modalImg, setModalImg] = useState(false);
  const [avatar, setAvatar] = useState(icono);
  const [otroColor, setOtroColor] = useState(color);
  function cambioFoto(e) {
    const newAvatar = e.target.childNodes[1].value;
    const newColor = e.target.childNodes[0].value;
    setAvatar(newAvatar);
    setOtroColor(colores[newColor]);
    mostrarModal();
  }

  function mostrarModal() {
    setModalImg(!modalImg);
  }
  return (
    <form
      onSubmit={editarUsuario}
      className="w-full h-full flex flex-wrap flex-col items-center justify-center gap-5"
      action="/"
    >
      {avatar !== icono || otroColor !== color ? (
        <div
          className={
            "rounded-full w-28 h-28 border-2 flex justify-center items-center font-light text-[7rem] cursor-pointer bg-white " +
            otroColor
          }
          onClick={mostrarModal}
        >
          <FontAwesomeIcon icon={JSON.parse(fotoPerfil[avatar])} />
        </div>
      ) : (
        <div
          className={
            "rounded-full w-28 h-28 border-2 flex justify-center items-center font-light text-[7rem] cursor-pointer bg-white " +
            color
          }
          onClick={mostrarModal}
        >
          <FontAwesomeIcon icon={JSON.parse(fotoPerfil[icono])} />
        </div>
      )}

      {modalImg && (
        <ModalPerfil accion={mostrarModal} cambioFoto={cambioFoto} />
      )}
      <div className="w-full h-full flex flex-col gap-5">
        <input
          type="text"
          name="nombre"
          defaultValue={nombre}
          autoComplete="off"
          className="text-white bg-transparent w-full h-10 py-4 px-4 outline-none outline-slate-600 focus:outline-slate-500 outline-offset-1 rounded"
        />
        <input type="hidden" name="idPerfil" value={id} />
        <input type="hidden" name="color" value={otroColor} />
        <input type="hidden" name="icono" value={avatar} />

        <button type="submit" className="bg-slate-500 rounded py-1">
          Editar
        </button>
      </div>
    </form>
  );
}

export function EditarPerfil() {
  const { datos } = useParams();
  const [id, nombre, color, icono] = datos.split("&");

  const { editarPerfil } = useCrearPerfil();

  function editarUsuario(e) {
    // e.preventDefault();
    const nombre = e.target.nombre.value;
    const id = e.target.idPerfil.value;
    const color = e.target.color.value;
    const icono = e.target.icono.value;
    editarPerfil(nombre, id, color, icono);
  }
  return (
    <section className="fixed z-50 top-0 w-full h-full min-h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className=" relative w-[20%] min-h-fit max-h-[90%] bg-slate-900 flex justify-center items-center flex-col py-5 px-12 font-medium rounded">
        <Link to="/" className="absolute top-0 right-0 text-xl m-4">
          <FontAwesomeIcon icon={faXmark} />
        </Link>
        <FormularioEditarPerfil
          editarUsuario={editarUsuario}
          nombre={nombre}
          id={id}
          color={color}
          icono={icono}
        />
      </div>
    </section>
  );
}
