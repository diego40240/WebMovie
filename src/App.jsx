import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import { ListaPeliculas } from "./Components/ListaPeliculas";
import InfiniteScroll from "react-infinite-scroll-component";
import { usePelicula } from "./Hooks/usePelicula";
import debounce from "just-debounce-it";
import { Loader } from "./Components/Loader";

function App() {
  const anteriorBuscar = useRef();
  const [busqueda, setBusqueda] = useState("");
  const { respuesta, obtener, totalP } = usePelicula({ busqueda });
  useEffect(() => {
    obtener(busqueda);
  }, []);

  const useDebounceCall = useCallback(
    debounce((nuevaBusqueda) => {
      obtener(nuevaBusqueda);
      anteriorBuscar.current.value = nuevaBusqueda;
    }, 300),
    []
  );

  // const useDebounceCall = useCallback(
  //   debounce(function (nuevaBusqueda) {
  //     return obtener(nuevaBusqueda);
  //   }, 300),
  //   []
  // );

  function buscar(e) {
    e.preventDefault();
    // seleccionamos el formulario y convertimos FORMDATA
    const formBuscar = new FormData(e.target);
    // Conertirmos el FormData a Objeto
    const inputs = Object.fromEntries(formBuscar);
    setBusqueda(inputs.buscar);

    if (anteriorBuscar.current.value === busqueda) return null;
    obtener(busqueda);
  }

  function cambioTecla(e) {
    const nuevaBusqueda = e.target.value;

    setBusqueda(nuevaBusqueda);
    useDebounceCall(nuevaBusqueda);
  }

  function sigue() {
    obtener(busqueda);
  }

  return (
    <main className="w-full h-full bg-gradient-to-t from-slate-950 to-slate-900 flex justify-center items-center flex-col gap-5 py-10 px-32 text-white overflow-x-hidden">
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

      <InfiniteScroll
        dataLength={respuesta.length}
        next={sigue}
        hasMore={totalP}
        loader={<Loader numeroCard={20} />}
        scrollThreshold={0.9}
        className="w-screen px-32"
      >
        <ListaPeliculas datos={respuesta} />
      </InfiniteScroll>
    </main>
  );
}

export default App;
