import { useState } from "react";

export function useFavorito() {
  const [getLocalFavorito, setLocalFavorito] = useState(
    JSON.parse(localStorage.getItem("id_movie"))
  );

  function agregarFavorito(e) {
    const id_movie = e.target.id;
    // const id_movie = parseInt(e.target.id);

    if (getLocalFavorito !== null) {
      if (Object.hasOwn(getLocalFavorito, id_movie)) {
        //BORRANDO ITEM DEL A LOCALSTORAGE
        delete getLocalFavorito[id_movie];
        localStorage.removeItem("id_movie");
        const nuevoFavoritos = { ...getLocalFavorito };
        setLocalFavorito(nuevoFavoritos);
        const jsonFavorito = JSON.stringify(nuevoFavoritos);
        localStorage.setItem("id_movie", jsonFavorito);
      } else {
        //AGREGANDO A LOCALSTORAGE

        const nuevoFavoritos = { ...getLocalFavorito, [id_movie]: id_movie };
        setLocalFavorito(nuevoFavoritos);
        const jsonFavorito = JSON.stringify(nuevoFavoritos);
        localStorage.setItem("id_movie", jsonFavorito);
      }

      //OBJETO A ARRAY --- Object.keys(getLocalFavorito)
      if (Object.keys(getLocalFavorito).length === 0) {
        localStorage.removeItem("id_movie");
      }
    } else {
      const nuevoFavoritos = { ...getLocalFavorito, [id_movie]: id_movie };
      setLocalFavorito(nuevoFavoritos);
      const jsonFavorito = JSON.stringify(nuevoFavoritos);
      localStorage.setItem("id_movie", jsonFavorito);
    }
  }

  return { agregarFavorito, getLocalFavorito };
}