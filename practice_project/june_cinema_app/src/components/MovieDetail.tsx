import { MovieData } from '@/types';
import Link from 'next/link';
import style from './MovieDetail.module.css';

export default function MovieDetail({ id, posterImgUrl }: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={posterImgUrl} alt="" />
    </Link>
  );
}
