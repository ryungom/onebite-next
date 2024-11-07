import Link from "next/link";
import style from "./MovieList.module.css";
import { MovieData } from "@/types";

export default function MovieList({ id, title, subTitle, description, releaseDate, company, genres, runtime, posterImgUrl }: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={`${posterImgUrl}`} alt="" />
    </Link>
  );
}
