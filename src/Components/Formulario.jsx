import { Buscar } from "./Form-Components/Buscar";

export function Formulario({ buscar, cambioTecla, busqueda, anteriorBuscar }) {
  return (
    <form className="flex gap-5" onSubmit={buscar}>
      <Buscar cambioTecla={cambioTecla} busqueda={busqueda} />
    </form>
  );
}
