import { useEffect, useRef, useState } from "react";
import { usePelicula } from "./usePelicula";
import { useDebounce } from "./useDebounce";

export function useBuscar() {
  const anteriorBuscar = useRef();
  const [busqueda, setBusqueda] = useState("");
  const [loader, setLoader] = useState(false);
  const [noRespuesta, setNoRespuesta] = useState(false);
  const [skeleton, setSkeleton] = useState(true);
  const { respuesta, obtener, totalP } = usePelicula({ busqueda });
  const { useDebounceCall, loaderTime } = useDebounce({
    setLoader,
    setSkeleton,
    setNoRespuesta,
    obtener,
    anteriorBuscar,
  });

  useEffect(() => {
    obtener(busqueda);
  }, []);
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
    setNoRespuesta(false);
    setLoader(true);
    setSkeleton(true);
    loaderTime();
  }

  function sigue() {
    obtener(busqueda);
  }
  return {
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
    obtener,
    setLoader,
    setSkeleton,
    setNoRespuesta,
  };
}
