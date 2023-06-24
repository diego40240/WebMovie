import "./App.css";
import { MostrarPelicula } from "./Components/Pelicula-Components/MostrarPelicula";
import { Loader } from "./Components/Carga-Components/Loader";

import { useBuscar } from "./Hooks/useBuscar";
import { Header } from "./Components/header";

import { Outlet, useLoaderData, useParams } from "react-router-dom";

function App() {
  const { oBuscar, oCarga, oRespuesta } = useBuscar();
  const { usuario } = useLoaderData();
  return (
    <main className="w-full h-full bg-gradient-to-t from-slate-950 to-slate-900 flex justify-center items-center flex-col gap-5 py-10 px-32 text-white overflow-x-hidden">
      <Header
        buscar={oBuscar.buscar}
        cambioTecla={oBuscar.cambioTecla}
        busqueda={oBuscar.busqueda}
        anteriorBuscar={oBuscar.anteriorBuscar}
        usuario={usuario}
      />

      {oCarga.loader && <Loader />}
      {/* <Suspense fallback={<SkeletonFavorito />}> */}
      <Outlet />
      {/* </Suspense> */}

      <MostrarPelicula
        respuesta={oRespuesta.respuesta}
        sigue={oBuscar.sigue}
        totalP={oRespuesta.totalP}
        noRespuesta={oCarga.noRespuesta}
        skeleton={oCarga.skeleton}
        usuario={usuario.id}
      />
    </main>
  );
}

export default App;
