import { useRouter } from "next/router";

export default function Page() {
  const route = useRouter();
  const { q } = route.query;
  return <h1>검색결과 : {q}</h1>;
}
