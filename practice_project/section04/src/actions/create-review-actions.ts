"use server";
import { revalidateTag } from "next/cache";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER_URL;

export async function createReviewAction(formData: FormData) {
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();
  if (!content || !author || !bookId) return;

  try {
    const res = await fetch(`${SERVER}/review`, {
      method: "post",
      body: JSON.stringify({ bookId, content, author }),
    });
    console.log(res.status);
    revalidateTag(`review-${bookId}`);
  } catch (err) {
    console.error(err);
    return;
  }
}
