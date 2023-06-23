import { NavLink } from "react-router-dom";

export function BtnEliminar({ datos, agregarFavorito }) {
  function borrarFavorito() {
    agregarFavorito({ datos });
  }
  return (
    <NavLink to="/peliculas/favoritos" onClick={borrarFavorito}>
      Elminar
    </NavLink>
  );
}
