const img = `https://image.tmdb.org/t/p/w500/`;
function BusarPelicula({ datos }) {
  return (
    <>
      {datos.map((dato) => (
        <article key={dato.id}>
          <h2
            className="whitespace-nowrap overflow-hidden text-ellipsis"
            title={dato.titulo}
          >
            {dato.titulo}
          </h2>
          <img src={img + dato.poster} alt={dato.titulo} />
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
