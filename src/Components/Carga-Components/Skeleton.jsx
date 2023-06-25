function CardSkeleton({ numeroCard }) {
  const nArray = Array(numeroCard).fill();
  return (
    <>
      {nArray.map((index, i) => (
        <article key={i}>
          <h2 className="bg-slate-700 w-[100%] h-6 mb-2 rounded"></h2>
          <div className="bg-slate-700 w-[100%] h-80 rounded"></div>
        </article>
      ))}
    </>
  );
}

export function Skeleton({ numeroCard }) {
  return (
    <section className="w-full grid grid-cols-autofit gap-8 text-center animate-pulse px-4 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-32">
      <CardSkeleton numeroCard={numeroCard} />
    </section>
  );
}
