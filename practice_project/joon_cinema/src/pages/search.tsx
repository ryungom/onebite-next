import { ReactNode } from "react";
import SearchLayout from "./components/SearchLayout";
import style from "./search.module.css";
import MovieList from "./components/MovieList";

export default function Page() {
  const data = [
    {
      id: 838209,
      title: "파묘",
      releaseDate: "2024-02-22",
      company: "Showbox, MCMC, Pinetown Production",
      genres: ["미스터리", "공포", "스릴러"],
      subTitle: "험한 것이 나왔다",
      description:
        "미국 LA, 거액의 의뢰를 받은 무당 화림과 봉길은 기이한 병이 대물림되는 집안의 장손을 만난다. 조상의 묫자리가 화근임을 알아챈 화림은 이장을 권하고, 돈 냄새를 맡은 최고의 풍수사 상덕과 장의사 영근이 합류한다. 절대 사람이 묻힐 수 없는 악지에 자리한 기이한 묘. 상덕은 불길한 기운을 느끼고 제안을 거절하지만, 화림의 설득으로 결국 파묘가 시작되고… 나와서는 안될 것이 나왔다.",
      runtime: 133,
      posterImgUrl: "https://media.themoviedb.org/t/p/w300_and_h450_face/tw0i3kkmOTjDjGFZTLHKhoeXVvA.jpg",
    },
  ];

  return (
    <div>
      <section>
        <div className={style.movieResult}>
          {data.map((movie) => (
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
