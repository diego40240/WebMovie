const img = `https://image.tmdb.org/t/p/w500/`;
function BusarPelicula({ datos }) {
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
            <img
              src="public/img/image-not-found.png"
              alt={dato.titulo}
              className="rounded h-[94%] bg-gradient-to-t from-slate-950 to-slate-900 object-contain"
            />
          ) : (
            <img
              src={img + dato.poster}
              alt={dato.titulo}
              className="rounded h-[94%]"
            />
          )}
        </article>
      ))}
    </>
  );
}

export function ListaPeliculas({ datos }) {
  return (
    <section className="w-full grid grid-cols-autofit gap-8 text-center">
      <BusarPelicula datos={datos} />
    </section>
  );
}
