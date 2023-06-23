function CardSkeleton({ numeroCard }) {
  const nArray = Array(numeroCard).fill();
  return (
    <div className=" relative w-[35%] min-h-fit max-h-[90%] bg-slate-900 flex justify-center items-center flex-col overflow-auto py-4 px-10 gap-4 font-medium">
      <div className="animate-pulse bg-slate-700 w-60 h-5 mb-2 rounded"></div>
      <div className="w-full h-[80%] lista-favorito overflow-auto flex flex-col gap-4">
        {nArray.map((_, index) => (
          <div
            key={index}
            className="animate-pulse flex flex-wrap w-full gap-4"
          >
            <div className="bg-slate-700 w-1/2 h-44 mb-2 rounded"></div>
            <div className="w-[40%] h-44 mb-2 flex flex-col justify-center">
              <div className="bg-slate-700 w-full h-4 mb-2 rounded"></div>
              <div className="bg-slate-700 w-full h-4 mb-2 rounded"></div>
            </div>
            <hr className="w-full border-t-slate-800 border-t-2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkeletonFavorito({ numeroCard }) {
  return (
    <section className="fixed z-50 top-0 w-full h-full min-h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <CardSkeleton numeroCard={numeroCard} />
    </section>
  );
}
