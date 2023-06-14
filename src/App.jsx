import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import { ListaPeliculas } from "./Components/ListaPeliculas";
import InfiniteScroll from "react-infinite-scroll-component";
import { usePelicula } from "./Hooks/usePelicula";
import debounce from "just-debounce-it";
import { Loader, Skeleton } from "./Components/Loader";
import { Formulario } from "./Components/Formulario";
import { useBuscar } from "./Hooks/useBuscar";

function App() {
  // const anteriorBuscar = useRef();
  // const [busqueda, setBusqueda] = useState("");
  // const [loader, setLoader] = useState(false);
  // const [noRespuesta, setNoRespuesta] = useState(false);
  // const [skeleton, setSkeleton] = useState(true);
  // const { respuesta, obtener, totalP } = usePelicula({ busqueda });
  // const useDebounceCall = useCallback(
  //   debounce((nuevaBusqueda) => {
  //     obtener(nuevaBusqueda);
  //     anteriorBuscar.current.value = nuevaBusqueda;
  //   }, 300),
  //   []
  // );

  // const loaderTime = useCallback(
  //   debounce(() => {
  //     setLoader(false);
  //     setSkeleton(false);
  //     setNoRespuesta(true);
  //   }, 1000),
  //   []
  // );
  const {
    buscar,
    cambioTecla,
    busqueda,
    anteriorBuscar,
    loader,
    respuesta,
    sigue,
    totalP,
    noRespuesta,
    skeleton,
  } = useBuscar();

  // useEffect(() => {
  //   obtener(busqueda);
  // }, []);

  // const useDebounceCall = useCallback(
  //   debounce((nuevaBusqueda) => {
  //     obtener(nuevaBusqueda);
  //     anteriorBuscar.current.value = nuevaBusqueda;
  //   }, 300),
  //   []
  // );

  // const loaderTime = useCallback(
  //   debounce(() => {
  //     setLoader(false);
  //     setSkeleton(false);
  //     setNoRespuesta(true);
  //   }, 1000),
  //   []
  // );

  // const useDebounceCall = useCallback(
  //   debounce(function (nuevaBusqueda) {
  //     return obtener(nuevaBusqueda);
  //   }, 300),
  //   []
  // );

  // function buscar(e) {
  //   e.preventDefault();
  //   // seleccionamos el formulario y convertimos FORMDATA
  //   const formBuscar = new FormData(e.target);
  //   // Conertirmos el FormData a Objeto
  //   const inputs = Object.fromEntries(formBuscar);
  //   setBusqueda(inputs.buscar);

  //   if (anteriorBuscar.current.value === busqueda) return null;
  //   obtener(busqueda);
  // }

  // function cambioTecla(e) {
  //   const nuevaBusqueda = e.target.value;

  //   setBusqueda(nuevaBusqueda);
  //   useDebounceCall(nuevaBusqueda);
  //   // tiempo();
  //   setNoRespuesta(false);
  //   setLoader(true);
  //   setSkeleton(true);
  //   loaderTime();
  // }

  // function sigue() {
  //   obtener(busqueda);
  // }

  return (
    <main className="w-full h-full bg-gradient-to-t from-slate-950 to-slate-900 flex justify-center items-center flex-col gap-5 py-10 px-32 text-white overflow-x-hidden">
      {/* <form className="flex gap-5" onSubmit={buscar}>
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
      </form> */}
      <Formulario
        buscar={buscar}
        cambioTecla={cambioTecla}
        busqueda={busqueda}
        anteriorBuscar={anteriorBuscar}
      />
      {loader && <Loader />}

      {respuesta.length > 0 ? (
        <InfiniteScroll
          dataLength={respuesta.length}
          next={sigue}
          hasMore={totalP}
          loader={<Loader />}
          scrollThreshold={1}
          pullDownToRefreshContent={<Loader />}
          className="w-screen px-32"
        >
          <ListaPeliculas datos={respuesta} />
        </InfiniteScroll>
      ) : (
        <>
          {noRespuesta && <h1>No hay respuesta</h1>}
          {skeleton && <Skeleton numeroCard={20} />}
        </>
      )}
    </main>
  );
}

export default App;
