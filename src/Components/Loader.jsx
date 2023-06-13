import Skeleton from "@mui/material/Skeleton";

function CardLoader({ numeroCard }) {
  const nArray = Array(numeroCard).fill();
  return (
    <>
      {nArray.map((index, i) => (
        <article key={i}>
          <Skeleton
            variant="text"
            width={"100%"}
            height={40}
            sx={{ bgcolor: "#262626" }}
          />
          <Skeleton
            variant="rounded"
            width={"100%"}
            height={315}
            sx={{ bgcolor: "#262626" }}
          />
        </article>
      ))}
    </>
  );
}

export function Loader({ numeroCard }) {
  return (
    <section className="w-full grid grid-cols-autofit gap-8 text-center">
      <CardLoader numeroCard={numeroCard} />
    </section>
  );
}
