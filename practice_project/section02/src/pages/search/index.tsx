import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect, useState } from "react";
import BookItem from "@/components/book-item";
import fetchBoooks from "@/lib/fetch-books";
import { BookData } from "@/types";
import { useRouter } from "next/router";

export default function Page() {
  const [books, setBooks] = useState<BookData[]>([]);
  const route = useRouter();
  const q = route.query.q;

  const bookData = async () => {
    const data = await fetchBoooks(q as string);
    setBooks(data);
  };

  useEffect(() => {
    if (q) {
      bookData();
    }
  }, [q]);
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
