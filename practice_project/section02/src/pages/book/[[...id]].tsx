import { useRouter } from "next/router";

export default function Page() {
  const route = useRouter();
  const { id } = route.query;
  return <h1>{id}번째 책이에용!! </h1>;
}
