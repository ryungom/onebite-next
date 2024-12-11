import SearchBar from '@/components/SearchBar';
import { ReactNode, Suspense } from 'react';

export default async function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div>
      <Suspense fallback={<div>로딩즁. . .</div>}>
        <SearchBar />
      </Suspense>
      {children}
      {modal}
      <div id="mainModal"></div>
    </div>
  );
}
