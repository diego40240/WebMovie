import { useRef, useState } from "react";
import { peticion } from "../Peliculas/fetchPelicula";

export function usePelicula({ busqueda }) {
  const [respuesta, setRespuesta] = useState([]);
  const [page, setPage] = useState(1);
  const [totalP, setTotalP] = useState(true);
  const anteriorBusqueda = useRef(busqueda);

  async function obtener(busqueda) {
    if (busqueda !== "" && anteriorBusqueda.current !== busqueda) {
      setRespuesta([]);
      setPage(1);
      anteriorBusqueda.current = busqueda;
    }

    const { resul, total } = await peticion({ busqueda, page });
    const r = respuesta.concat(resul);
    const nuevaPagina = page + 1;
    setPage(nuevaPagina);
    setRespuesta(r);
    setTotalP(total);
  }

  return { respuesta, obtener, totalP };
}
