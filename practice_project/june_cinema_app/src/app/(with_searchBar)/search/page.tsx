import MovieDetail from "@/components/MovieDetail";
import style from "./page.module.css";
import { MovieData } from "@/types";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER_URL;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  const data = await fetch(`${SERVER}/movie/search?q=${q}`, {
    next: { revalidate: 60 },
  });
  const searchData: MovieData[] = await data.json();

  return (
    <div>
      <section>
        <div className={style.movieResult}>
          {searchData.map((movie) => (
            <MovieDetail key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}
