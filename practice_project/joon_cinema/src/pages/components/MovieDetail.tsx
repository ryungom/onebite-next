import Link from "next/link";
import style from "./MovieList.module.css";
import { MovieData } from "@/types";

export default function MovieDetail({ id, posterImgUrl }: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={`${posterImgUrl}`} alt="" />
    </Link>
  );
}
