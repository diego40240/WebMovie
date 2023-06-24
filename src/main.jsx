import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Favoritos from "./View/Favoritos.jsx";
import { Perfiles } from "./View/Perfiles.jsx";
import { EditarPerfil } from "./Components/Perfil/EditarPerfil.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Perfiles />}>
        <Route path=":datos" element={<EditarPerfil />} />
      </Route>
      <Route
        path="/peliculas/:id"
        element={<App />}
        loader={({ params }) => {
          const listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
          const usuario = listaUsuarios[params.id];
          usuario.conectado = true;
          const usuarioConectado = { ...listaUsuarios };
          localStorage.setItem("usuarios", JSON.stringify(usuarioConectado));

          return { usuario };
        }}
      >
        <Route
          path="favoritos"
          element={<Favoritos />}
          loader={({ request }) => {
            const idUsuario = request.url.split("/").reverse()[1];

            const getFavoritos = localStorage.getItem(idUsuario);
            if (getFavoritos !== null) {
              const lista_favoritos = JSON.parse(getFavoritos);
              const array_favoritos = Object.values(lista_favoritos);

              return { favoritos: array_favoritos, idUsuario: idUsuario };
            }

            return { favoritos: null, idUsuario: idUsuario };
          }}
        />
        <Route path=":datos" element={<EditarPerfil />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
