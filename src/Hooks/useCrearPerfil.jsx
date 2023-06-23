import { useState } from "react";

export function useCrearPerfil() {
  const [perfiles, setPerfiles] = useState(
    JSON.parse(localStorage.getItem("usuarios"))
  );

  function obtenerPerfiles() {
    if (perfiles !== null) {
      const array_usuarios = Object.values(perfiles);
      return { usuarios: array_usuarios };
    } else {
      return { usuarios: [] };
    }
  }
  const { usuarios } = obtenerPerfiles();

  function crearPerfil(nombre, color, icono) {
    if (perfiles !== null) {
      const id = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
      const usuarios = {
        ...perfiles,
        [id]: {
          id: id,
          nombre: nombre,
          conectado: false,
          color: color,
          icono: icono,
        },
      };
      const nuevoUsuario = JSON.stringify(usuarios);
      localStorage.setItem("usuarios", nuevoUsuario);
      setPerfiles(usuarios);
    } else {
      const id = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
      const usuarios = {
        [id]: {
          id: id,
          nombre: nombre,
          conectado: false,
          color: color,
          icono: icono,
        },
      };
      const nuevoUsuario = JSON.stringify(usuarios);
      localStorage.setItem("usuarios", nuevoUsuario);
      setPerfiles(usuarios);
    }
  }

  function eliminarPerfil(id) {
    if (Object.hasOwn(perfiles, id)) {
      delete perfiles[id];
      localStorage.removeItem("usuarios");
      const usuarios = { ...perfiles };
      const nuevoUsuario = JSON.stringify(usuarios);
      localStorage.setItem("usuarios", nuevoUsuario);
      setPerfiles(usuarios);
    }

    if (Object.keys(perfiles).length === 0) {
      localStorage.removeItem("usuarios");
    }
  }
  function editarPerfil(nombre, id, color, icono) {
    if (Object.hasOwn(perfiles, id)) {
      perfiles[id] = {
        id: id,
        nombre: nombre,
        conectado: false,
        color: color,
        icono: icono,
      };

      const usuarios = { ...perfiles };
      const nuevoUsuario = JSON.stringify(usuarios);
      localStorage.setItem("usuarios", nuevoUsuario);
      setPerfiles(usuarios);
    }
  }

  return {
    crearPerfil,
    eliminarPerfil,
    usuarios,
    editarPerfil,
  };
}
