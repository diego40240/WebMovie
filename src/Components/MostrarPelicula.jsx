import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "./Loader";
import { Skeleton } from "./Skeleton";
import { NoEncontrado } from "./NoEncontrado";
import { BtnSubir } from "./Botones/BtnSubir";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";

const img = `https://image.tmdb.org/t/p/w500/`;
function CardPelicula({ datos }) {
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
            <div className="overflow-hidden">
              <img
                src={img + dato.poster}
                alt={dato.titulo}
                className="cursor-pointer rounded h-[94%] transition ease-in-out duration-300  hover:scale-105 hover:opacity-70"
              />
            </div>
          )}
        </article>
      ))}
    </>
  );
}

function ListaPeliculas({ datos }) {
  return (
    <section className="w-full grid grid-cols-autofit gap-8 text-center">
      <CardPelicula datos={datos} />
    </section>
  );
}
export function MostrarPelicula({
  respuesta,
  sigue,
  totalP,
  noRespuesta,
  skeleton,
}) {
  return (
    <>
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
            className="w-screen px-32"
          >
            <ListaPeliculas datos={respuesta} />
          </InfiniteScroll>
        </>
      ) : (
        <>
          {noRespuesta && <NoEncontrado />}
          {skeleton && <Skeleton numeroCard={20} />}
        </>
      )}
    </>
  );
}
