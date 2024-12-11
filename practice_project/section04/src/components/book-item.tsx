import type { BookData } from "@/types";
import Link from "next/link";
import style from "./book-item.module.css";
import Image from "next/image";

export default function BookItem({
  id,
  title,
  subTitle,
  // description,
  author,
  publisher,
  coverImgUrl,
}: BookData) {
  return (
    <Link href={`/book/${id}`} className={style.container}>
      <figure>
        <Image
          src={coverImgUrl}
          fill
          sizes="100%"
          alt={"도서이미지 자료입니다"}
        />
      </figure>
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}
