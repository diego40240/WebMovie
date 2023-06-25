import debounce from "just-debounce-it";
import { useCallback } from "react";

export function useDebounce({
  setLoader,
  setSkeleton,
  setNoRespuesta,
  obtener,
  anteriorBuscar,
  setVerBuscar,
  setBusqueda,
}) {
  const useDebounceCall = useCallback(
    debounce((nuevaBusqueda) => {
      obtener(nuevaBusqueda);
      // anteriorBuscar.current.value = nuevaBusqueda;
    }, 300),
    []
  );

  const loaderTime = useCallback(
    debounce(() => {
      setLoader(false);
      setSkeleton(false);
      setNoRespuesta(true);
    }, 1000),
    []
  );

  const buscarTime = useCallback(
    debounce(() => {
      setVerBuscar(false);
    }, 10000),
    []
  );

  const volver = useCallback(
    debounce(() => {
      obtener("");
      setBusqueda("");
    }, 300),
    []
  );

  // const useDebounceCall = useCallback(
  //   debounce(function (nuevaBusqueda) {
  //     return obtener(nuevaBusqueda);
  //   }, 300),
  //   []
  // );
  return { useDebounceCall, loaderTime, buscarTime, volver };
}

// export function cerrarBuscar({ setVerBuscar }) {
//   const buscarTime = useCallback(
//     debounce((setVerBuscar) => {
//       setVerBuscar(false);
//     }, 1000),
//     []
//   );
//   return { buscarTime };
// }
