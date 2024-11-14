import { MovieData } from "@/types";
import style from "./page.module.css";
import { notFound } from "next/navigation";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER_URL;

export async function generateStaticParams() {
  // return [{ id: "1022789" }, { id: "533535" }, { id: "1314450" }];
  const data = await fetch(`${SERVER}/movie/`);
  if (!data.ok) throw new Error("스태틱파람 호출 실패");
  const staticAllData: MovieData[] = await data.json();
  return staticAllData.map(({ id }) => ({ id: id.toString() }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await fetch(`${SERVER}/movie/${id}`);
  if (!data.ok) {
    if (data.status === 404) {
      notFound();
    }
    return <div>에러가 발생해쪄용</div>;
  }
  const thisMovie: MovieData = await data.json();

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
