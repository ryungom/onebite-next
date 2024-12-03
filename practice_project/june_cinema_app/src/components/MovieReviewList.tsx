import { ReviewData } from '@/types';
import style from './MovieReviewList.module.css';
import { fetchReviews } from '@/dataFetch/fetchReview';

export default async function MovieReviewList({ thisId }: { thisId: string }) {
  const reviewData: ReviewData[] = await fetchReviews(thisId);

  return (
    <div className={style.reviewWrap}>
      {reviewData.map((item) => (
        <section key={item.id}>
          <span>{item.author}</span>
          <span className={style.createdAt}>{new Date(item.createdAt).toLocaleString()}</span>
          <p>{item.content}</p>
          <button>리뷰 삭제하기</button>
        </section>
      ))}
    </div>
  );
}
