import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import delay from "@/util/delay";

export default async function SearchResult({ param }: { param: string }) {
  await delay(1500);
  const SERVER = process.env.NEXT_PUBLIC_API_SERVER_URL;

  const res = await fetch(`${SERVER}/book/search?q=${param}`);
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
