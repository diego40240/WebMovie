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
// import { Favoritos } from "./View/Favoritos.jsx";
import Favoritos from "./View/Favoritos.jsx";
import { Perfiles } from "./View/Perfiles.jsx";
import { EditarPerfil } from "./Components/Perfil/EditarPerfil.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/" element={<App />}> */}
      <Route path="/" element={<Perfiles />}>
        <Route path=":datos" element={<EditarPerfil />} />
      </Route>
      <Route path="/peliculas" element={<App />}>
        <Route
          path="favoritos"
          element={<Favoritos />}
          loader={() => {
            const getFavoritos = localStorage.getItem("id_movie");
            if (getFavoritos !== null) {
              const lista_favoritos = JSON.parse(getFavoritos);
              const array_favoritos = Object.values(lista_favoritos);

              return { favoritos: array_favoritos };
            }

            return { favoritos: null };
          }}
        />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
