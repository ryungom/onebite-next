import { ReactNode } from "react";
import SearchLayout from "./components/SearchLayout";
import style from "./search.module.css";
import MovieList from "./components/MovieList";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { fetchMovie } from "./lib/fetchMovie";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const query = context.query.q;
  const searchData = await fetchMovie(query as string);
  return {
    props: { searchData },
  };
};

export default function Page({ searchData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <section>
        <div className={style.movieResult}>
          {searchData.map((movie) => (
            <MovieList key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
