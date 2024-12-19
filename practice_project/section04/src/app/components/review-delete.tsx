"use client";

import deleteReviewAction from "@/actions/delete-review-actions";
import { useActionState } from "react";
import style from "./review-delete.module.css";

export default function ReviewDelete({ bookId }: { bookId: number }) {
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null,
  );
  return (
    <form action={formAction}>
      <input type="hidden" name="bookId" value={bookId} />
      <button disabled={isPending} type="submit" className={style.button}>
        리뷰삭제
      </button>
    </form>
  );
}
