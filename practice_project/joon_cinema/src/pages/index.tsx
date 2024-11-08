import { ReactNode } from "react";
import SearchLayout from "./components/SearchLayout";
import style from "./index.module.css";

import { InferGetStaticPropsType } from "next";
import { fetchMovie, fetchMovieRandom } from "@/lib/fetchMovie";
import MovieDetail from "./components/MovieDetail";

export const getStaticProps = async () => {
  const [movie, randomMovie] = await Promise.all([
    fetchMovie(),
    fetchMovieRandom(),
  ]);

  return {
    props: { movie, randomMovie },
  };
};

export default function Home({
  movie,
  randomMovie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={style.container}>
      <section>
        <h2>지금 가장 추천하는 영화</h2>
        <div className={style.movieWrap}>
          {randomMovie.map((item) => (
            <MovieDetail key={item.id} {...item} />
          ))}
        </div>
      </section>
      <section>
        <h2>등록된 모든 영화</h2>
        <div className={style.movieWrap_all}>
          {movie.map((item) => (
            <MovieDetail key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
