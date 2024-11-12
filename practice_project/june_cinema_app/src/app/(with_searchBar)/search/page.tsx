export default async function Page({ searchParams }: { searchParams: { q: string } }) {
  const { q } = await searchParams;
  return <div>검색페이지 검색값 : {q} </div>;
}
