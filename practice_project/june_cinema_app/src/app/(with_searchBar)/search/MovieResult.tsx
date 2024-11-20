import MovieDetail from '@/components/MovieDetail';
import { MovieData } from '@/types';
import Delay from '@/util/Delay';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER_URL;

export default async function MovieResult({ param }: { param: string }) {
  await Delay(1500);
  const data = await fetch(`${SERVER}/movie/search?q=${param}`, {
    next: { revalidate: 60 },
  });
  const searchData: MovieData[] = await data.json();
  return (
    <>
      {searchData.map((movie) => (
        <MovieDetail key={movie.id} {...movie} />
      ))}
    </>
  );
}
