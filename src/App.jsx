import "./App.css";
import { MostrarPelicula } from "./Components/Pelicula-Components/MostrarPelicula";
import { Loader } from "./Components/Carga-Components/Loader";
import { Formulario } from "./Components/Form-Components/Formulario";
import { useBuscar } from "./Hooks/useBuscar";

function App() {
  const { oBuscar, oCarga, oRespuesta } = useBuscar();

  return (
    <main className="w-full h-full bg-gradient-to-t from-slate-950 to-slate-900 flex justify-center items-center flex-col gap-5 py-10 px-32 text-white overflow-x-hidden">
      <Formulario
        buscar={oBuscar.buscar}
        cambioTecla={oBuscar.cambioTecla}
        busqueda={oBuscar.busqueda}
        anteriorBuscar={oBuscar.anteriorBuscar}
      />
      {oCarga.loader && <Loader />}

      <MostrarPelicula
        respuesta={oRespuesta.respuesta}
        sigue={oBuscar.sigue}
        totalP={oRespuesta.totalP}
        noRespuesta={oCarga.noRespuesta}
        skeleton={oCarga.skeleton}
      />
    </main>
  );
}

export default App;
