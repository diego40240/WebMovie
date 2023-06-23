import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

function Estrella({ id, getLocalFavorito }) {
  return getLocalFavorito === null ? (
    <FontAwesomeIcon icon={faStarRegular} className="pointer-events-none" />
  ) : getLocalFavorito[id] === undefined ? (
    <FontAwesomeIcon icon={faStarRegular} className="pointer-events-none" />
  ) : (
    <FontAwesomeIcon
      icon={faStarSolid}
      className="pointer-events-none text-yellow-400 rounded-full bg-black bg-opacity-70 p-2"
    />
  );
}

export function BtnEstrella({ datos, agregarFavorito, getLocalFavorito }) {
  function agregandoListaFavorito() {
    agregarFavorito({ datos });
  }

  return (
    <button
      className="m-1 rounded-full w-8 h-8 absolute top-0 right-0 invisible peer-hover:visible hover:visible flex justify-center items-center hover:scale-110 transition ease-in-out duration-300"
      onClick={agregandoListaFavorito}
      id={datos.id}
    >
      <Estrella id={datos.id} getLocalFavorito={getLocalFavorito} />
    </button>
  );
}
