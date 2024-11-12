export default async function Page({ searchParams }: { searchParams: Promise<{ q: string }> }) {
  const { q } = await searchParams;
  return <div>서치페이쥐 : {q}</div>;
}
