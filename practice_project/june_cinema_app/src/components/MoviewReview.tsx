'use client';

import { fetchReviewPost } from '@/dataFetch/fetchReview';
import style from './MoviewReview.module.css';
import { useActionState, useEffect } from 'react';

export default function MovieReviewForm({ thisId }: { thisId: string }) {
  const [state, formAction, isPending] = useActionState(fetchReviewPost, null);
  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);
  return (
    <>
      <form action={formAction} className={style.reviewInput}>
        <input type="hidden" name="id" value={thisId} />
        <textarea name="reviewContent" id="" placeholder="리뷰를 입력해주세요"></textarea>
        <div>
          <input type="text" name="author" placeholder="작성자" />
          <button disabled={isPending} type="submit">
            {isPending ? '...' : '리뷰등록'}
          </button>
        </div>
      </form>
    </>
  );
}
