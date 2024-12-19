import style from "./page.module.css";
import { notFound } from "next/navigation";
import { BookData, ReviewData } from "@/types";
import ReviewItem from "@/app/components/review-item";
import ReviewEditor from "@/app/components/review-editor";
import { revalidateTag } from "next/cache";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER_URL;

export async function generateStaticParams() {
  const res = await fetch(`${SERVER}/book`);
  if (!res.ok) throw new Error(res.statusText);

  const books: BookData[] = await res.json();

  // return [{ id: "1" }, { id: "2" }, { id: "3" }];
  return books.map((book) => ({
    id: book.id.toString(),
  }));
}

async function BookDetail({ bookId }: { bookId: string }) {
  const res = await fetch(`${SERVER}/book/${bookId}`);
  if (!res.ok) {
    if (res.status === 400) {
      notFound();
    }
  }
  const mockData = await res.json();
  const { title, subTitle, description, author, publisher, coverImgUrl } =
    mockData;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}

async function ReviewList({ bookId }: { bookId: string }) {
  const res = await fetch(`${SERVER}/review/book/${bookId}`, {
    next: { tags: [`review-${bookId}`] },
  });
  if (!res.ok) {
    throw new Error(`리뷰요청에러 : ${res.statusText}`);
  }
  const reviews: ReviewData[] = await res.json();
  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={`review-item-${review.id}`} {...review} />
      ))}
    </section>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <BookDetail bookId={id} />
      <ReviewEditor bookId={id} />
      <ReviewList bookId={id} />
    </>
  );
}
