import BookItem from "@/components/book-item";
import { BookData } from "@/types";
const SERVER = process.env.NEXT_PUBLIC_API_SERVER_URL;

export default async function Page({
  searchParams,
}: {
  searchParams: {
    q?: string;
  };
}) {
  const { q } = await searchParams;
  const res = await fetch(`${SERVER}/book/search?q=${q}`);
  if (!res.ok) {
    return <div>페칭오류...</div>;
  }
  const books: BookData[] = await res.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
