import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER_URL;
async function AllBooks() {
  try {
    const res = await fetch(`${SERVER}/book`);
    const books: BookData[] = await res.json();
    return (
      <>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </>
    );
  } catch (err) {
    console.error("에러발생:::", err);
    return <div>오류가 발생해쪄용...</div>;
  }
}

async function RecoBooks() {
  try {
    const res = await fetch(`${SERVER}/book/random`);
    const books: BookData[] = await res.json();
    return (
      <>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </>
    );
  } catch (err) {
    console.error("에러발생:::", err);
    return <div>오류가 발생해쪄용...</div>;
  }
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
