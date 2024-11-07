import { ReactNode } from "react";
import SearchLayout from "./components/SearchLayout";
import style from "./index.module.css";
import MovieList from "./components/MovieList";

import { InferGetServerSidePropsType } from "next";
import { fetchMovie, fetchMovieRandom } from "./lib/fetchMovie";

export const getServerSideProps = async () => {
  const [movie, randomMovie] = await Promise.all([fetchMovie(), fetchMovieRandom()]);

  return {
    props: { movie, randomMovie },
  };
};

export default function Home({ movie, randomMovie }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={style.container}>
      <section>
        <h2>지금 가장 추천하는 영화</h2>
        <div className={style.movieWrap}>
          {randomMovie.map((movie) => (
            <MovieList key={movie.id} {...movie} />
          ))}
        </div>
      </section>
      <section>
        <h2>등록된 모든 영화</h2>
        <div className={style.movieWrap_all}>
          {movie.map((movie) => (
            <MovieList key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}
Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
