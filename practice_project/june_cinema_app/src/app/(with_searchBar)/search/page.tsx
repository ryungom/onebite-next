import MovieDetail from "@/components/MovieDetail";
import style from "./page.module.css";

export default async function Page({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const { q } = await searchParams;
  const data = {
    id: 1022789,
    title: "인사이드 아웃 2",
    releaseDate: "2024-06-11",
    company: "Walt Disney Pictures, Pixar",
    genres: ["애니메이션", "가족", "모험", "코미디"],
    subTitle: "비상! 새로운 감정들이 몰려온다!",
    description:
      "13살이 된 라일리의 행복을 위해 매일 바쁘게 머릿속 감정 컨트롤 본부를 운영하는 ‘기쁨’, ‘슬픔’, ‘버럭’, ‘까칠’, ‘소심’. 그러던 어느 날, 낯선 감정인 ‘불안’, ‘당황’, ‘따분’, ‘부럽’이가 본부에 등장하고, 언제나 최악의 상황을 대비하며 제멋대로인 ‘불안’이와 기존 감정들은 계속 충돌한다. 결국 새로운 감정들에 의해 본부에서 쫓겨나게 된 기존 감정들은 다시 본부로 돌아가기 위해 위험천만한 모험을 시작하는데…",
    runtime: 97,
    posterImgUrl:
      "https://media.themoviedb.org/t/p/w300_and_h450_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg",
  };
  console.log("확인:::", data);
  return (
    <div>
      <section>
        <div className={style.movieResult}>
          <MovieDetail {...data} />
        </div>
      </section>
    </div>
  );
}
