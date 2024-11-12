import { MovieData } from "@/types";
import Link from "next/link";
import style from "./MovieDetail.module.css";

export default function MovieDetail({ id, posterImgUrl }: MovieData) {
  console.log("들어왔나요?", id);
  console.log("들어왔나요?", posterImgUrl);
  return (
    <>
      <Link href={`/movie/${id}`} className={style.container}>
        <img src={posterImgUrl} alt="" />
      </Link>
    </>
  );
}
