import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BtnCargando() {
  return (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-slate-500 hover:bg-slate-400 transition ease-in-out duration-150 cursor-not-allowed gap-2"
      disabled
    >
      <FontAwesomeIcon icon={faCircleNotch} spin />
      Cargando...
    </button>
  );
}

export function Loader() {
  return (
    <section className="grid place-items-center mt-4">
      <BtnCargando />
    </section>
  );
}
