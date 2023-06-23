import { Link, NavLink } from "react-router-dom";
import { Formulario } from "./Form-Components/Formulario";
import { useState } from "react";

export function Header({ buscar, cambioTecla, busqueda, anteriorBuscar }) {
  return (
    <header className="w-full flex items-center flex-wrap justify-between">
      <nav className="h-full flex gap-10 items-center">
        <NavLink to="/" className="font-bold text-2xl">
          PELICULADV
        </NavLink>
        <NavLink to="favoritos" className="font-medium text-lg">
          Favoritos
        </NavLink>
      </nav>

      <Formulario
        buscar={buscar}
        cambioTecla={cambioTecla}
        busqueda={busqueda}
        anteriorBuscar={anteriorBuscar}
      />
    </header>
  );
}
