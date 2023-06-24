import { useState } from "react";

export function useFavorito(idUsuario) {
  const [getLocalFavorito, setLocalFavorito] = useState(
    JSON.parse(localStorage.getItem(idUsuario))
  );

  function agregarFavorito(datos, usuario) {
    if (getLocalFavorito !== null) {
      if (Object.hasOwn(getLocalFavorito, datos.id)) {
        //BORRANDO ITEM DEL A LOCALSTORAGE

        delete getLocalFavorito[datos.id];
        console.log(usuario);
        // localStorage.removeItem(usuario.id);
        const nuevoFavoritos = { ...getLocalFavorito };

        const jsonFavorito = JSON.stringify(nuevoFavoritos);
        localStorage.setItem(usuario, jsonFavorito);
        setLocalFavorito(nuevoFavoritos);
      } else {
        const nuevoFavoritos = { ...getLocalFavorito, [datos.id]: datos };

        const jsonFavorito = JSON.stringify(nuevoFavoritos);
        localStorage.setItem(usuario, jsonFavorito);
        setLocalFavorito(nuevoFavoritos);
      }
      //OBJETO A ARRAY --- Object.keys(getLocalFavorito)
      if (Object.keys(getLocalFavorito).length === 0) {
        localStorage.removeItem(usuario);
      }
      //AGREGANDO A LOCALSTORAGE
    } else {
      const nuevoFavoritos = { ...getLocalFavorito, [datos.id]: datos };

      const jsonFavorito = JSON.stringify(nuevoFavoritos);
      localStorage.setItem(usuario, jsonFavorito);
      setLocalFavorito(nuevoFavoritos);
    }
  }

  return { agregarFavorito, getLocalFavorito };
}
