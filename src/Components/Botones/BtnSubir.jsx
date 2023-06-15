import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export function BtnSubir() {
  function cambioScroll() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center fixed m-5 bottom-0 right-0 hover:opacity-95"
      onClick={cambioScroll}
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-orange-500" />
    </button>
  );
}
