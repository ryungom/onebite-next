import MovieLoading from '@/components/skeleton/MovieLoading';

export default function MovieLoadingWrap({ count }: { count: number }) {
  return new Array(count).fill(0).map((_, i) => <MovieLoading key={i} />);
}
