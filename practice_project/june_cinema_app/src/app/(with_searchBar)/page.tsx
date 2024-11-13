import MovieDetail from "@/components/MovieDetail";
import style from "./page.module.css";
import data from "@/app/dummyData/data.json";
import { MovieData } from "@/types";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER_URL;

async function AllMovie() {
  try {
    const data = await fetch(`${SERVER}/movie`, { next: { revalidate: 60 } });
    const movies: MovieData[] = await data.json();
    return (
      <>
        {movies.map((item) => (
          <MovieDetail key={item.id} {...item} />
        ))}
      </>
    );
  } catch (err) {
    console.error(err);
  }
}

async function RandomMovie() {
  try {
    const data = await fetch(`${SERVER}/movie/random`, {
      next: { revalidate: 3 },
    });
    const movies: MovieData[] = await data.json();
    return (
      <>
        {movies.map((item) => (
          <MovieDetail key={item.id} {...item} />
        ))}
      </>
    );
  } catch (err) {
    console.error(err);
  }
}

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <section>
          <h2>지금 가장 추천하는 영화</h2>
          <div className={style.movieWrap}>
            <RandomMovie />
          </div>
        </section>
        <section>
          <h2>등록된 모든 영화</h2>
          <div className={style.movieWrap_all}>
            <AllMovie />
          </div>
        </section>
      </div>
    </>
  );
}
