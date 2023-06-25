import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Navigate, useLoaderData } from "react-router-dom";
import { SkeletonFavorito } from "../Components/Carga-Components/SkeletonFavorito";
import { Suspense } from "react";
import { useFavorito } from "../Hooks/useFavorito";
import { BtnEliminar } from "../Components/Botones/BtnEliminar";

export default function Favoritos() {
  const { favoritos, idUsuario } = useLoaderData();

  const img = `https://image.tmdb.org/t/p/w500/`;

  const { agregarFavorito, getLocalFavorito } = useFavorito(idUsuario);

  return favoritos === null ? (
    <section className="fixed z-50 top-0 w-full h-full min-h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className=" relative w-[35%] min-h-fit max-h-[90%] bg-slate-900 flex justify-center items-center flex-col py-4 px-10 gap-4 font-medium rounded">
        {/* <NavLink
          to="/"
        
          className="text-xl m-4 bg-orange-600  rounded-lg py-2 px-5  hover:bg-opacity-95"
        >
          Añadir favoritos
        </NavLink> */}
        <NavLink
          to={"/peliculas/" + idUsuario}
          className="absolute top-0 right-0 text-xl m-3"
        >
          <FontAwesomeIcon icon={faXmark} />
        </NavLink>
        <h3>No hay favorito</h3>
      </div>
    </section>
  ) : (
    <Suspense fallback={<SkeletonFavorito numeroCard={4} />}>
      <section
        id="favoritos"
        className="fixed z-50 top-0 w-full h-full min-h-screen bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div className="relative max-md:w-[90%] max-md:px-4 md:w-[80%] lg:w-[50%] 2xl:w-[35%] min-h-fit max-h-[90%] bg-slate-900 flex justify-center items-center flex-col overflow-auto py-4 md:px-10 gap-4 font-medium">
          <h2 className="text-xl">Favoritos</h2>
          <NavLink
            to={"/peliculas/" + idUsuario}
            className="absolute top-0 right-0 text-xl m-4"
          >
            <FontAwesomeIcon icon={faXmark} />
          </NavLink>
          <div className="flex flex-col gap-4 w-full overflow-auto lista-favorito">
            {favoritos.map((dato) => (
              <article
                key={dato.id}
                className="w-full min-h-fit flex flex-wrap justify-start items-center gap-4"
              >
                <img
                  src={img + dato.poster_previ}
                  alt={dato.titulo}
                  className="cursor-pointer rounded w-1/2 object-contain"
                />
                <div className="w-[40%] flex flex-col justify-start items-center">
                  <h2 className="w-full">{dato.titulo}</h2>
                  <h2 className="w-full text-slate-500">{dato.año}</h2>
                </div>
                <BtnEliminar
                  datos={{ id: dato.id }}
                  idUsuario={idUsuario}
                  agregarFavorito={agregarFavorito}
                />

                <hr className="w-full border-t-slate-800 border-t-2" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </Suspense>
  );
}
