import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NoEncontrado() {
  return (
    <div className="h-screen w-full pt-16 flex flex-col items-center gap-5 rounded">
      <FontAwesomeIcon icon={faClapperboard} bounce className="text-9xl" />
      <div className="max-[350px]:w-[86%] text-center border-solid border-slate-700 border-2 rounded-lg py-2 px-5 bg-gradient-to-t from-slate-950 to-slate-900">
        No se encontraron peliculas
      </div>
    </div>
  );
}
