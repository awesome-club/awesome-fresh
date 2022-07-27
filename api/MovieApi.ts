import { MovieDbKey, MovieDbPath } from "../env.ts";

export function getTodayShows(): Promise<Response> {
  return fetch(`${MovieDbPath}/tv/airing_today?api_key=${MovieDbKey}`);
}

export function search(query: string): Promise<Response> {
  return fetch(`${MovieDbPath}/search/tv?api_key=${MovieDbKey}&query=${query}`);
}
