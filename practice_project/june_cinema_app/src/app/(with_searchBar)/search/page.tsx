import style from './page.module.css';
import { Suspense } from 'react';
import MovieLoadingWrap from '@/components/skeleton/MovieLoadingWrap';
import MovieResult from '@/app/(with_searchBar)/search/MovieResult';

export default async function Page({ searchParams }: { searchParams: Promise<{ q: string }> }) {
  const { q } = await searchParams;

  return (
    <div>
      <section>
        <div className={style.movieResult}>
          <Suspense key={q || ''} fallback={<MovieLoadingWrap count={3} />}>
            <MovieResult param={q} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
