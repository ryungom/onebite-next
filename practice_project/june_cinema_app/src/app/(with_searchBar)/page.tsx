import MovieDetail from "@/components/MovieDetail";
import style from "./page.module.css";
import data from "@/app/dummyData/data.json";

export default function Home() {
  const randomMovie = [
    {
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
    },
    {
      id: 533535,
      title: "데드풀과 울버린",
      releaseDate: "2024-07-24",
      company:
        "Marvel Studios, Maximum Effort, 21 Laps Entertainment, 20th Century Studios, Kevin Feige Productions, TSG Entertainment",
      genres: ["액션", "코미디", "SF"],
      subTitle: "",
      description:
        "히어로 생활에서 은퇴한 후, 평범한 중고차 딜러로 살아가던 ‘데드풀’이 예상치 못한 거대한 위기를 맞아 모든 면에서 상극인 ‘울버린’을 찾아가게 되며 펼쳐지는 도파민 폭발 액션 블록버스터.",
      runtime: 128,
      posterImgUrl:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/4Zb4Z2HjX1t5zr1qYOTdVoisJKp.jpg",
    },
    {
      id: 1314450,
      title: "안녕, 할부지",
      releaseDate: "2024-09-04",
      company: "ACOMMZ, Everland Resort",
      genres: ["다큐멘터리", "애니메이션"],
      subTitle: "사랑을 준 건 나였지만 행복을 준 건 너였어",
      description:
        "선물로 찾아온 만남, 예정된 이별. 푸바오의 중국 귀환 일정이 결정되고, 사랑하는 이들의 아쉬움이 커져만 간다. 마침내 다가온 이별의 순간, 푸바오의 행복을 위해 애써 담담해 보였던 강바오와 송바오 역시 흔들리기 시작하는데… 헤어질 때를 알기에 매 순간 진심이고 애틋했던 그들. 1354일, 그동안의 못다 한 이야기. 안녕, 그리고 안녕…",
      runtime: 95,
      posterImgUrl:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/2rDHFtRtAiixl3eWT7h5pae6Tue.jpg",
    },
  ];
  return (
    <>
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
            {data.map((item) => (
              <MovieDetail key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
