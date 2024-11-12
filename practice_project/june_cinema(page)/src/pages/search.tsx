import { ReactNode, useEffect, useState } from "react";
import SearchLayout from "./components/SearchLayout";
import style from "./search.module.css";
import MovieDetail from "./components/MovieDetail";

import { useRouter } from "next/router";
import { MovieData } from "@/types";
import { fetchMovie } from "@/lib/fetchMovie";
import Head from "next/head";

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
    <>
      <Head>
        <title>재주니형 시네마 - 검색</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="재주니형 영화공방 검색" />
        <meta
          property="og:description"
          content="마법소녀를 검색해볼까요? 파이파이포포이 포아포아푸"
        />
      </Head>
      <div>
        <section>
          <div className={style.movieResult}>
            {searchData.map((movie) => (
              <MovieDetail key={movie.id} {...movie} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
