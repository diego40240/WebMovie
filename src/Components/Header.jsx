import { Link, NavLink } from "react-router-dom";
import { Formulario } from "./Form-Components/Formulario";

import { fotoPerfil } from "../Variables/variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function Header({
  buscar,
  cambioTecla,
  busqueda,
  anteriorBuscar,
  usuario,
}) {
  const [opciones, setOpciones] = useState(false);
  function abrirOpciones() {
    setOpciones(!opciones);
  }
  function cerrarSesion() {
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    const salidaUsuario = listaUsuarios[usuario.id];

    salidaUsuario.conectado = false;
    const usuarioDesconectado = { ...listaUsuarios };
    localStorage.setItem("usuarios", JSON.stringify(usuarioDesconectado));
  }
  return (
    <header className="w-full flex items-center flex-wrap justify-between">
      <nav className="h-full flex gap-10 items-center">
        <NavLink to={"/peliculas/" + usuario.id} className="font-bold text-2xl">
          PELICULADV
        </NavLink>
        <NavLink
          to="favoritos"
          className="font-medium text-lg py-2 px-4 rounded-md hover:bg-slate-500 hover:bg-opacity-10 transition ease-in-out duration-300"
        >
          Favoritos
        </NavLink>
      </nav>

      <div className="flex w-1/4 gap-5 justify-between items-center relative">
        <Formulario
          buscar={buscar}
          cambioTecla={cambioTecla}
          busqueda={busqueda}
          anteriorBuscar={anteriorBuscar}
        />
        <div className="rounded-md p-1 hover:bg-slate-500 hover:bg-opacity-10 transition ease-in duration-300">
          <div
            className={
              "rounded-full flex justify-center items-center font-light text-5xl cursor-pointer bg-white " +
              usuario.color
            }
            onClick={abrirOpciones}
          >
            <FontAwesomeIcon
              icon={JSON.parse(fotoPerfil[usuario.icono])}
              className="pointer-events-none"
            />
          </div>
        </div>
        {opciones && (
          <ul className="absolute z-50 right-0 top-full mt-2 rounded-md flex flex-col bg-slate-950 bg-opacity-90 w-fit h-fit border-opacity-90">
            <Link
              to="/"
              className="px-5 py-2 hover:bg-slate-800 hover:bg-opacity-60 hover:rounded-t-md"
            >
              <li>Cambiar perfil</li>
            </Link>
            <Link
              to={`${usuario.id.toString()}&${usuario.nombre}&${
                usuario.color
              }&${usuario.icono}`}
              className="px-5 py-2 hover:bg-slate-800 hover:bg-opacity-60"
            >
              <li>Editar perfil</li>
            </Link>
            <Link
              to="/"
              className="px-5 py-2 hover:bg-slate-800 hover:bg-opacity-60 hover:rounded-b-md"
            >
              <li onClick={cerrarSesion}>Cerrar Sesion</li>
            </Link>
          </ul>
        )}

        {/* <Link to="/">
          <div
            className={
              "rounded-full flex justify-center items-center font-light text-5xl cursor-pointer bg-white " +
              usuario.color
            }
            onClick={cerrarSesion}
          >
            <FontAwesomeIcon
              icon={JSON.parse(fotoPerfil[usuario.icono])}
              className="pointer-events-none"
            />
          </div>
        </Link> */}
      </div>
    </header>
  );
}
