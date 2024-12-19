"use server";
import { revalidateTag } from "next/cache";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER_URL;

export default async function deleteReviewAction(_: any, formData: FormData) {
  const bookId = formData.get("bookId")?.toString();
  try {
    const res = await fetch(`${SERVER}/review/${bookId}`, {
      method: "DELETE",
      body: JSON.stringify({ bookId }),
    });
    revalidateTag(`review-${bookId}`);
  } catch (err) {
    console.error(err);
    return;
  }
}
