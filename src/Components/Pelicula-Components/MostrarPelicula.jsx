import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "../Carga-Components/Loader";
import { Skeleton } from "../Carga-Components/Skeleton";
import { NoEncontrado } from "./NoEncontrado";
import { BtnSubir } from "../Botones/BtnSubir";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";

import { BtnEstrella } from "../Botones/BtnEstrella";
import { useFavorito } from "../../Hooks/useFavorito";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const img = `https://image.tmdb.org/t/p/w500/`;

function CardPelicula({ datos, usuario }) {
  const { agregarFavorito, getLocalFavorito } = useFavorito(usuario);

  return (
    <>
      {datos.map((dato) => (
        <article key={dato.id}>
          <h2
            className="whitespace-nowrap overflow-hidden text-ellipsis mb-2"
            title={dato.titulo}
          >
            {dato.titulo}
          </h2>
          {dato.poster === null ? (
            <div className="h-[94%] bg-gradient-to-t from-slate-950 to-slate-900 grid place-items-center">
              <FontAwesomeIcon icon={faClapperboard} className="text-9xl" />
            </div>
          ) : (
            <div className="overflow-hidden relative">
              <img
                src={img + dato.poster}
                alt={dato.titulo}
                className="cursor-pointer rounded h-[94%] transition ease-in-out duration-300  hover:scale-105 hover:opacity-70 peer"
              />
              <BtnEstrella
                usuario={usuario}
                datos={{
                  id: dato.id,
                  titulo: dato.titulo,
                  año: dato.año,
                  poster_previ: dato.poster_previ,
                }}
                agregarFavorito={agregarFavorito}
                getLocalFavorito={getLocalFavorito}
              />
            </div>
          )}
        </article>
      ))}
    </>
  );
}

function ListaPeliculas({ datos, usuario }) {
  return (
    <section className="w-full min-h-screen grid grid-cols-autofit gap-8 text-center ">
      <CardPelicula datos={datos} usuario={usuario} />
    </section>
  );
}
export function MostrarPelicula({
  respuesta,
  sigue,
  totalP,
  noRespuesta,
  skeleton,
  usuario,
  oCargaLoader,
}) {
  const estiloMargenPeli = oCargaLoader ? "max-md:mt-24 md:mt-10" : "mt-14";
  return (
    <div className={"w-screen " + estiloMargenPeli}>
      {oCargaLoader && <Loader />}
      {respuesta.length > 0 ? (
        <>
          <BtnSubir />
          <InfiniteScroll
            dataLength={respuesta.length}
            next={sigue}
            hasMore={totalP}
            loader={<Loader />}
            scrollThreshold={1}
            pullDownToRefreshContent={<Loader />}
            className="w-full px-4 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-32"
          >
            <ListaPeliculas datos={respuesta} usuario={usuario} />
          </InfiniteScroll>
        </>
      ) : (
        <>
          {noRespuesta && <NoEncontrado />}
          {skeleton && <Skeleton numeroCard={20} />}
        </>
      )}
    </div>
  );
}
