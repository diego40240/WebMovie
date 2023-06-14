import debounce from "just-debounce-it";
import { useCallback } from "react";

export function useDebounce({
  setLoader,
  setSkeleton,
  setNoRespuesta,
  obtener,
}) {
  const useDebounceCall = useCallback(
    debounce((nuevaBusqueda) => {
      obtener(nuevaBusqueda);
      anteriorBuscar.current.value = nuevaBusqueda;
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
  return { useDebounceCall, loaderTime };
}
