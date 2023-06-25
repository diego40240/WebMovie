import { Link, NavLink } from "react-router-dom";
import { Formulario } from "./Form-Components/Formulario";

import { fotoPerfil } from "../Variables/variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faArrowLeft,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDebounce } from "../Hooks/useDebounce";

export function Header({
  buscar,
  cambioTecla,
  busqueda,
  anteriorBuscar,
  usuario,
  obtener,
  setBusqueda,
}) {
  const [verBuscar, setVerBuscar] = useState(false);
  const [opciones, setOpciones] = useState(false);

  const estiloBuscador = verBuscar ? "translate-y-14" : "-translate-y-10";
  const opcionesResponsive = opciones
    ? "max-md:translate-x-0 md:hidden"
    : "max-md:-translate-x-full md:hidden";
  const { buscarTime, volver } = useDebounce({
    setVerBuscar,
    obtener,
    setBusqueda,
  });
  const listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
  const usuarios = Object.values(listaUsuarios);

  function volverPrincipal() {
    volver();
  }

  function mostrarBuscar() {
    setVerBuscar(!verBuscar);
    buscarTime();
  }
  function abrirOpciones() {
    setOpciones(!opciones);
  }
  function cerrarSesion() {
    // const listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    const salidaUsuario = listaUsuarios[usuario.id];

    salidaUsuario.conectado = false;
    const usuarioDesconectado = { ...listaUsuarios };
    localStorage.setItem("usuarios", JSON.stringify(usuarioDesconectado));
  }
  return (
    <>
      <div
        className={
          "w-full h-14 left-0 top-0 z-50 fixed flex justify-center items-center bg-slate-900 transition ease-out duration-300 py-3 max-sm:px-4 sm:px-32  " +
          estiloBuscador
        }
      >
        <Formulario
          buscar={buscar}
          cambioTecla={cambioTecla}
          busqueda={busqueda}
          anteriorBuscar={anteriorBuscar}
        />
      </div>

      <header className="fixed top-0 z-50 w-full flex items-center flex-wrap justify-between bg-slate-900 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-32 p-3">
        <nav className="h-full flex gap-10 items-center">
          <NavLink
            to={"/peliculas/" + usuario.id}
            className="font-bold lg:text-2xl"
            onClick={volverPrincipal}
          >
            PELICULADV
          </NavLink>
          <NavLink
            to="favoritos"
            className="font-medium max-md:hidden lg:text-lg py-2 px-4 rounded-md hover:bg-slate-500 hover:bg-opacity-10 transition ease-in-out duration-300"
          >
            Favoritos
          </NavLink>
        </nav>

        <div className="flex max-md:gap-4 md:gap-5 items-center relative md:w-[35%] xl:w-[30%] 2xl:w-[25%] h-full">
          <div className="w-full h-8 lg:h-10 max-md:hidden">
            <Formulario
              buscar={buscar}
              cambioTecla={cambioTecla}
              busqueda={busqueda}
              anteriorBuscar={anteriorBuscar}
            />
          </div>
          <div className="text-lg md:hidden" onClick={mostrarBuscar}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="pointer-events-none"
            />
          </div>

          <div className="rounded-md p-1 hover:bg-slate-500 hover:bg-opacity-10 transition ease-in duration-300">
            <div
              className={
                "rounded-full flex justify-center items-center font-light max-md:text-3xl md:text-4xl lg:text-5xl cursor-pointer bg-white " +
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
            <ul
              className={
                "absolute z-50 right-0 top-full mt-2 rounded-md flex-col bg-slate-950 bg-opacity-90 w-fit h-fit border-opacity-90 "
              }
            >
              <Link to="/">
                <li className="px-5 py-2 hover:bg-slate-800 hover:bg-opacity-60 hover:rounded-t-md">
                  Cambiar perfil
                </li>
              </Link>
              <Link
                to={`${usuario.id.toString()}&${usuario.nombre}&${
                  usuario.color
                }&${usuario.icono}`}
              >
                <li className="px-5 py-2 hover:bg-slate-800 hover:bg-opacity-60">
                  Editar perfil
                </li>
              </Link>
              <Link to="/">
                <li
                  className="px-5 py-2 hover:bg-slate-800 hover:bg-opacity-60 hover:rounded-b-md"
                  onClick={cerrarSesion}
                >
                  Cerrar sesión
                </li>
              </Link>
            </ul>
          )}
          <div
            className={
              "font-medium fixed z-50 top-0 left-0  w-full h-full px-2 min-h-screen bg-gradient-to-t from-slate-950 to-slate-900 flex flex-col justify-start " +
              opcionesResponsive
            }
          >
            <button
              className="w-[100%] flex justify-start items-center p-2 gap-4"
              onClick={abrirOpciones}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="pointer-events-none"
              />
              Perfiles y más
            </button>
            <div className="flex flex-wrap justify-center">
              {usuarios.map((perfil) => (
                <Link
                  key={perfil.id}
                  to={"/peliculas/" + perfil.id}
                  className="rounded-md hover:bg-slate-500 hover:bg-opacity-10 p-2 transition ease-in-out duration-300 flex-1 h-fit flex  justify-center items-center"
                  onClick={abrirOpciones}
                >
                  <div
                    className={
                      "rounded-full flex justify-center items-center font-light max-sm:text-7xl sm:text-8xl cursor-pointer bg-white " +
                      perfil.color
                    }
                  >
                    <FontAwesomeIcon
                      icon={JSON.parse(fotoPerfil[perfil.icono])}
                    />
                  </div>
                </Link>
              ))}
            </div>
            <ul className="mt-2 gap-2 rounded-md flex flex-col bg-opacity-90 w-full h-fit border-opacity-90">
              <Link
                to={`${usuario.id.toString()}&${usuario.nombre}&${
                  usuario.color
                }&${usuario.icono}`}
                className="px-5 py-2 rounded-md bg-slate-800 bg-opacity-40"
              >
                <li>Editar perfil</li>
              </Link>
              <Link
                to={"/peliculas/" + usuario.id + "/favoritos"}
                className="px-5 py-2 rounded-md bg-slate-800 bg-opacity-40"
              >
                <li>Favoritos</li>
              </Link>
            </ul>
            <Link
              to="/"
              className="px-5 py-2 text-center  hover:rounded-b-md"
              onClick={cerrarSesion}
            >
              Cerrar sesión
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
