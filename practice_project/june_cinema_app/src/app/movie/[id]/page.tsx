import style from "./page.module.css";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const thisMovie = {
    id: 1209217,
    title: "명탐정 코난: 100만 달러의 펜타그램",
    releaseDate: "2024-04-12",
    company:
      "TMS Entertainment, Yomiuri Telecasting Corporation, Shogakukan, TOHO, Nippon Television Network Corporation, Shogakukan-Shueisha Productions",
    genres: ["애니메이션", "범죄", "미스터리", "액션"],
    subTitle: "마침내 밝혀지는 괴도 키드의 진실",
    description:
      "홋카이도 하코다테에 있는 ‘오노에’ 재벌 가의 창고에 ‘괴도 키드’의 예고장이 도착한다. ‘빅 주얼’만을 노리는 키드가 이번에 노리는 것은 과거 신선조 귀신 부장 ‘히지카타 토시조’와 얽힌 전설적인 검. 검술 대회에 참가하기 위해 하코다테에 방문한 ‘핫토리 헤이지’와 그를 응원하기 위해 온 ‘코난’ 일행도 괴도 키드를 막기 위해 사건에 뛰어들게 된다. 한편, 가슴에 열 십 자(十) 모양의 자상을 입은 시신이 발견되고 ‘죽음의 상인’이라고 불리는 무기상이 용의자로 지목된다. 그 역시 괴도 키드가 찾는 검을 노리고 있었고, 그 검이 오노에 가문이 세대에 걸쳐 지킨 보물을 찾을 열쇠임이 밝혀진다. 검을 쫓는 키드에게 수수께끼의 검사가 습격해 오고, 절체절명의 위기가 닥쳐오는데…!",
    runtime: 111,
    posterImgUrl:
      "https://media.themoviedb.org/t/p/w300_and_h450_face/n5tubyY6HoGzhd3RpTAmfKgrt9Y.jpg",
  };
  const {
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = thisMovie;

  return (
    <div className={style.container}>
      <figure style={{ backgroundImage: `url('${posterImgUrl}')` }}>
        <img src={posterImgUrl} alt="" />
      </figure>

      <section className={style.titleWrap}>
        <div className={style.title_main}>
          <h2 className={style.h2}>{title}</h2>
          <aside>
            {genres.map((item) => (
              <span key={"id_" + item}>{item}</span>
            ))}
          </aside>
        </div>
        <div className={style.title_runTime}>
          <span>{runtime + "분"}</span>
        </div>
      </section>

      {subTitle ? (
        <h3 className={style.h3}>
          <i>{"'" + subTitle + "'"}</i>
        </h3>
      ) : (
        <></>
      )}

      <section className={style.description}>
        <p>{description}</p>
        <div>
          <span>개봉일 | </span>
          <span>{releaseDate}</span>
          <span>제작사 | </span>
          <span>{company}</span>
        </div>
      </section>
    </div>
  );
}
