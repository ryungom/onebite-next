import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import style from "./[id].module.css";
import fetchOneBook from "@/lib/fetch-one-books";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const id = context.params!.id;
  const book = await fetchOneBook(Number(id));
  return {
    props: { book },
  };
};

export default function Page({ book }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!book) return "문제발생했습니다. 재준님에게 연락하세요";
  const { id, title, subTitle, description, author, publisher, coverImgUrl } = book;
  return (
    <div className={style.container}>
      <div style={{ backgroundImage: `url('${coverImgUrl}')` }} className={style.cover_img_container}>
        <img src={coverImgUrl} alt="" />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>

      <div className={style.description}>{description}</div>
    </div>
  );
}
