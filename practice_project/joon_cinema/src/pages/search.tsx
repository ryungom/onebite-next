import { useRouter } from "next/router";
import { ReactNode } from "react";
import SearchLayout from "./components/SearchLayout";

export default function Page() {
  const route = useRouter();
  const { q } = route.query;
  return <h1>검색결과 : {q}</h1>;
}

Page.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
