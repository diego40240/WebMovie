import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

function Estrella({ id, getLocalFavorito }) {
  return getLocalFavorito === null ? (
    <FontAwesomeIcon icon={faStarRegular} className="pointer-events-none" />
  ) : getLocalFavorito[id] === undefined ? (
    <FontAwesomeIcon icon={faStarRegular} className="pointer-events-none" />
  ) : (
    <FontAwesomeIcon icon={faStarSolid} className="pointer-events-none" />
  );
}

export function BtnEstrella({ id, agregarFavorito, getLocalFavorito }) {
  return (
    <button
      className="m-1 rounded-full border-white border-solid border-2 w-8 h-8 absolute top-0 right-0 invisible peer-hover:visible hover:visible flex justify-center items-center"
      onClick={agregarFavorito}
      id={id}
    >
      <Estrella id={id} getLocalFavorito={getLocalFavorito} />
    </button>
  );
}
