export function Buscar({ cambioTecla, busqueda }) {
  return (
    <>
      <input
        type="text"
        name="buscar"
        placeholder="Busca la pelicula"
        className="px-5 text-black outline-none"
        onChange={cambioTecla}
        value={busqueda.trimStart(" ")}
        // ref={anteriorBuscar}
      />
      <button
        type="submit"
        className="bg-orange-500 border-orange-400 border-solid border-2 rounded-lg py-2 px-5  hover:opacity-95"
      >
        Buscar
      </button>
    </>
  );
}
