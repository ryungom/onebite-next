import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";
import { Suspense } from "react";
// import delay from "@/util/delay";
import BookListSkeleton from "../components/skeleton/book-list-skeleton";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER_URL;
async function AllBooks() {
  // await delay(1500);
  const res = await fetch(`${SERVER}/book`, { next: { revalidate: 3 } });
  if (!res.ok) return <div>올북스 오류가 발생해쪄용...3</div>;
  const books: BookData[] = await res.json();
  return (
    <>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </>
  );
}
async function RecoBooks() {
  // await delay(3000);
  const res = await fetch(`${SERVER}/book/random`);
  const books: BookData[] = await res.json();
  return (
    <>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </>
  );
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
