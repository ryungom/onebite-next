import { MovieData } from "@/types";

let baseUrl = `https://onebite-cinema-api-ryungoms-projects.vercel.app/movie`;
export async function fetchMovie(query?: string): Promise<MovieData[]> {
  if (query) {
    baseUrl += `/search?q=${query}`;
  }
  try {
    const res = await fetch(baseUrl);
    if (!res.ok) {
      throw new Error();
    }
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function fetchMovieRandom(): Promise<MovieData[]> {
  const url = `${baseUrl}/random`;
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

export async function fetchOneMovie(
  movieId: number
): Promise<MovieData | null> {
  const url = `${baseUrl}/${movieId}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error();
    }
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
