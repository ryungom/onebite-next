import { BookData } from "@/types";

export default async function fetchBoooks(query?: string): Promise<BookData[]> {
  let url = `https://onebite-books-server-olive.vercel.app/book`;
  if (query) {
    url += `/search?q=${query}`;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error();
    }
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
