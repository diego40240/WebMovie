export function Main({ children }) {
  return (
    <main className="w-full h-full bg-gradient-to-t from-slate-950 to-slate-900 flex justify-center items-center flex-col gap-5 py-10 px-32 text-white overflow-x-hidden">
      {children}
    </main>
  );
}
