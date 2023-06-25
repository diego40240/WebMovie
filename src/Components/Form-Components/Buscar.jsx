export function Buscar({ cambioTecla, busqueda }) {
  return (
    <>
      <input
        autoComplete="off"
        type="text"
        name="buscar"
        placeholder="Buscar pelicula"
        className="w-full h-full rounded bg-transparent focus:bg-slate-800 px-3 outline-none outline-offset-1 outline-slate-700 focus:outline-slate-600"
        onChange={cambioTecla}
        value={busqueda.trimStart(" ")}
        // ref={anteriorBuscar}
      />
      <button
        type="submit"
        className="bg-orange-500 border-orange-400 border-solid border-2 rounded-lg py-2 px-5  hover:opacity-95 hidden"
      >
        Buscar
      </button>
    </>
  );
}
