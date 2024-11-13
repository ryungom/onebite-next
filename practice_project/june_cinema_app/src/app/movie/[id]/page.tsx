import { MovieData } from "@/types";
import style from "./page.module.css";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER_URL;

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const data = await fetch(`${SERVER}/movie/${id}`);
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
