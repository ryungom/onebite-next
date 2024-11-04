import { useRouter } from "next/router";

export default function Page() {
  const route = useRouter();
  const { id } = route.query;
  return <h1>{id} 영화상세페이지</h1>;
}
