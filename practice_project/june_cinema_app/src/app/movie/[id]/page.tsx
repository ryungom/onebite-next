export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <div>영화목록페이쥐에용 : {id}</div>;
}
