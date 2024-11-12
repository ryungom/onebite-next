import { GetStaticPropsContext, InferGetServerSidePropsType } from "next";

import style from "./[id].module.css";
import { useRouter } from "next/router";
import { fetchOneMovie } from "@/lib/fetchMovie";
import Head from "next/head";

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1022789" } },
      { params: { id: "533535" } },
      { params: { id: "1314450" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const thisMovie = await fetchOneMovie(Number(id));
  if (!thisMovie) {
    return {
      notFound: true,
    };
  }
  return {
    props: { thisMovie },
  };
};

export default function Page({
  thisMovie,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  const route = useRouter();
  if (route.isFallback) {
    return (
      <>
        <Head>
          <title>재주니형 시네마</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:title" content="재주니형 영화공방" />
          <meta
            property="og:description"
            content="마법소녀를 아세요? 삐리카삐리랄라 포포리라페페르트"
          />
        </Head>
        <div>로 딩 중 . . .</div>
      </>
    );
  }
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
    <>
      <Head>
        <title>재주니형 시네마 : {title}</title>
        <meta property="og:image" content={posterImgUrl} />
        <meta property="og:title" content={subTitle} />
        <meta property="og:description" content={description} />
      </Head>
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
    </>
  );
}
