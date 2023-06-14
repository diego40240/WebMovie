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

export function Loader() {
  return (
    <section className="grid place-items-center mt-4">
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-slate-500 hover:bg-slate-400 transition ease-in-out duration-150 cursor-not-allowed"
        disabled
      >
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Cargando...
      </button>
    </section>
  );
}
