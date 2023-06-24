import { Buscar } from "./Buscar";

export function Formulario({ buscar, cambioTecla, busqueda, anteriorBuscar }) {
  return (
    <form
      className="flex gap-5 w-[80%] h-[80%] hover:bg-slate-500 hover:bg-opacity-10 transition ease-in-out duration-300"
      onSubmit={buscar}
    >
      <Buscar cambioTecla={cambioTecla} busqueda={busqueda} />
    </form>
  );
}
