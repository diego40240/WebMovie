function CardSkeleton({ numeroCard }) {
  const nArray = Array(numeroCard).fill();
  return (
    <>
      {nArray.map((index, i) => (
        <article key={i}>
          <h2 className="bg-slate-700 w-52 h-6 mb-2 rounded"></h2>
          <div className="bg-slate-700 w-52 h-80 rounded"></div>
        </article>
      ))}
    </>
  );
}

export function Skeleton({ numeroCard }) {
  return (
    <section className="w-full grid grid-cols-autofit gap-8 text-center animate-pulse">
      <CardSkeleton numeroCard={numeroCard} />
    </section>
  );
}
