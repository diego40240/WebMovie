import { NavLink } from "react-router-dom";

export function BtnEliminar({ datos, agregarFavorito, idUsuario }) {
  function borrarFavorito() {
    agregarFavorito(datos, idUsuario);
  }
  return (
    <NavLink
      to={"/peliculas/" + idUsuario + "/favoritos"}
      onClick={borrarFavorito}
    >
      Elminar
    </NavLink>
  );
}
