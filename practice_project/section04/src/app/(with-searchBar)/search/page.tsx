import { Suspense } from "react";
// import { BookData } from "@/types";
import SearchResult from "./SearchResult";
import BookListSkeleton from "@/app/components/skeleton/book-list-skeleton";
// import BookItem from "@/components/book-item";
// import delay from "@/util/delay";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    q: string;
  };
}) {
  const { q } = await searchParams;
  return (
    <Suspense key={q || ""} fallback={<BookListSkeleton count={3} />}>
      <SearchResult param={q} />
    </Suspense>
  );
}
