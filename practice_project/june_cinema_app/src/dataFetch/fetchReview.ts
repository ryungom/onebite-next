'use server';

import { revalidateTag } from 'next/cache';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER_URL;

export async function fetchReviews(id: string) {
  const data = await fetch(`${SERVER}/review/movie/${id}`, {
    next: { tags: [`review-${id}`] },
  });
  const res = await data.json();
  return res;
}

export async function fetchReviewPost(_: any, formData: FormData) {
  const content = formData.get('reviewContent')?.toString();
  const author = formData.get('author')?.toString();
  const movieId = formData.get('id')?.toString();

  if (!content || !author || !movieId) {
    return {
      status: false,
      error: '리뷰 내용과 작성자를 입력해주세요.',
    };
  }

  try {
    const res = await fetch(`${SERVER}/revieww`, {
      method: 'POST',
      body: JSON.stringify({ movieId, content, author }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    revalidateTag(`review-${movieId}`);
    return {
      status: true,
      error: '',
    };
  } catch (err) {
    return {
      status: false,
      error: `리뷰 저장에 실패했어요. ${err}`,
    };
  }
}
