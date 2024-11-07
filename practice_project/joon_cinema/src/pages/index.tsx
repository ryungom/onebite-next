import { ReactNode } from "react";
import SearchLayout from "./components/SearchLayout";
import style from "./index.module.css";
import data from "@/dummyData/data.json";
import MovieList from "./components/MovieList";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h2>지금 가장 추천하는 영화</h2>
        <div className={style.movieWrap}>
          {data
            .filter((item) => item.runtime < 97)
            .map((movie) => (
              <MovieList key={movie.id} {...movie} />
            ))}
        </div>
      </section>
      <section>
        <h2>등록된 모든 영화</h2>
        <div className={style.movieWrap_all}>
          {data.map((movie) => (
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
