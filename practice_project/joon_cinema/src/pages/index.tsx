import { ReactNode } from "react";
import SearchLayout from "./components/SearchLayout";

export default function Home() {
  return <h1>인덱스인데요?</h1>;
}
Home.getLayout = (page: ReactNode) => {
  return <SearchLayout>{page}</SearchLayout>;
};
