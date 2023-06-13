// export async function peticion(peli, setPelicula) {
//   const res = await fetch(`https://www.omdbapi.com/?apikey=31833f4f&s=${peli}`);
//   const data = await res.json();
//   const nuevaPeli = data.Search;
//   setPelicula(nuevaPeli);
// }

export async function peticion({ busqueda, page }) {
  const api_key = "2ab28436c71b594db9b9e7ff49fbe40d";
  const api_llamado =
    busqueda === "" || busqueda.length == 1
      ? `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${api_key}`
      : `https://api.themoviedb.org/3/search/movie?query=${busqueda}&page=${page}&api_key=${api_key}`;
  const res = await fetch(api_llamado);
  const data = await res.json();
  const info = data.results;
  const total = page < data.total_pages;

  const resul = info.map((d) => ({
    id: d.id,
    titulo: d.title,
    año: d.release_date,
    poster: d.poster_path,
  }));
  return { resul, total };
}
