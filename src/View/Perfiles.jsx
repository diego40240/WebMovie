import { Link, Outlet } from "react-router-dom";
import { useCrearPerfil } from "../Hooks/useCrearPerfil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { AgregarPerfil } from "../Components/Perfil/AgregarPerfil";
import { fotoPerfil } from "../Variables/variables";

export function Perfiles() {
  const { crearPerfil, eliminarPerfil, usuarios } = useCrearPerfil();
  const [nuevoUsuario, setNuevoUsuario] = useState(false);

  function abrirCrear() {
    setNuevoUsuario(!nuevoUsuario);
  }

  function usuario(e) {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const color = e.target.color.value;
    const icono = e.target.icono.value;

    crearPerfil(nombre, color, icono);
    setNuevoUsuario(!nuevoUsuario);
  }

  function elimnarUsuario(e) {
    e.preventDefault();
    const id = e.target.value;
    eliminarPerfil(id);
  }

  return (
    <section className="w-full min-h-screen lg:h-screen bg-gradient-to-t from-slate-950 to-slate-900 text-white flex justify-center items-center font-medium">
      <div className="py-5 px-3 min-[350px]:w-[90%] min-[350px]:gap-4 lg:w-[70%] lg:h-fit h-full flex flex-wrap justify-center items-center lg:gap-10 ">
        {usuarios.map((perfil) => (
          <div
            key={perfil.id}
            className="relative flex-1 flex flex-col justify-center items-center text-center "
          >
            <Link
              to={"peliculas/" + perfil.id}
              className="rounded-md hover:bg-slate-500 hover:bg-opacity-10 p-2 transition ease-in-out duration-300 w-full h-full flex justify-center items-center"
            >
              <div
                className={
                  "rounded-full flex justify-center items-center font-light max-[350px]:text-7xl text-8xl lg:text-[10rem] cursor-pointer bg-white " +
                  perfil.color
                }
              >
                <FontAwesomeIcon icon={JSON.parse(fotoPerfil[perfil.icono])} />
              </div>
            </Link>
            <Link
              to={`${perfil.id.toString()}&${perfil.nombre}&${perfil.color}&${
                perfil.icono
              }`}
              title={perfil.nombre}
              className="w-full py-1 rounded-md transition ease-in-out duration-300 hover:bg-slate-500 hover:bg-opacity-10 overflow-hidden text-ellipsis "
            >
              <h3 className="transition duration-300 ease-out peer">
                {perfil.nombre}
              </h3>
              <h3 className="hidden transition duration-300 ease-out translate-y-6 peer-hover:translate-y-0 hover:translate-y-0 peer-hover:block hover:block">
                EDITAR
              </h3>
            </Link>

            <button
              className="rounded-full p-2 absolute -top-2 -right-2 transition ease-in-out duration-300 hover:scale-125  hover:bg-slate-500 hover:bg-opacity-10"
              value={perfil.id}
              onClick={elimnarUsuario}
            >
              <FontAwesomeIcon
                icon={faUserMinus}
                className="pointer-events-none"
              />
            </button>
          </div>
        ))}
        <AgregarPerfil
          abrirCrear={abrirCrear}
          usuario={usuario}
          nuevoUsuario={nuevoUsuario}
        />
      </div>
      <Outlet />
    </section>
  );
}
