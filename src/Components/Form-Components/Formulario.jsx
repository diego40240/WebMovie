import { Buscar } from "./Buscar";

export function Formulario({ buscar, cambioTecla, busqueda, anteriorBuscar }) {
  return (
    <form className="flex gap-5 w-1/4" onSubmit={buscar}>
      <Buscar cambioTecla={cambioTecla} busqueda={busqueda} />
    </form>
  );
}
