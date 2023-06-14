export function Formulario({ buscar, cambioTecla, busqueda, anteriorBuscar }) {
  return (
    <form className="flex gap-5" onSubmit={buscar}>
      <input
        type="text"
        name="buscar"
        placeholder="Busca la pelicula"
        className="px-5 text-black"
        onChange={cambioTecla}
        value={busqueda.trimStart(" ")}
        ref={anteriorBuscar}
      />
      <button
        type="submit"
        className="bg-orange-400 border-orange-500 border-solid border-2 rounded-lg py-2 px-5"
      >
        Buscar
      </button>
    </form>
  );
}
