import { ReactNode, useEffect, useState } from "react";
import SearchLayout from "./components/SearchLayout";
import style from "./search.module.css";
import MovieDetail from "./components/MovieDetail";

import { useRouter } from "next/router";
import { MovieData } from "@/types";
import { fetchMovie } from "@/lib/fetchMovie";

// 설정을 아무것도 안해둬서 SSG로 사전랜더링 진행
export default function Page() {
  const [searchData, setSearchData] = useState<MovieData[]>([]);
  const route = useRouter();
  const q = route.query.q;

  const getData = async () => {
    const data = await fetchMovie(q as string);
    setSearchData(data);
  };

  useEffect(() => {
    getData();
  }, [q]);

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

Page.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
