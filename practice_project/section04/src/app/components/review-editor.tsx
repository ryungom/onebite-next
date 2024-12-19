"use client";

import { createReviewAction } from "@/actions/create-review-actions";
import style from "./review-editor.module.css";
import { useActionState } from "react";

export default function ReviewEditor({ bookId }: { bookId: string }) {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null,
  );
  return (
    <section>
      <form className={style.form_container} action={formAction}>
        <input type="hidden" name="bookId" value={bookId} readOnly />
        <textarea required name="content" placeholder="리뷰내용" />
        <div className={style.submit_container}>
          <input required type="text" name="author" placeholder="작성자" />
          <button disabled={isPending} type="submit">
            {isPending ? "...." : "작성하기"}
          </button>
        </div>
      </form>
    </section>
  );
}
