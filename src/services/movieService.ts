import axios from 'axios';
import type { Movie } from '../types/movie';

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

interface MovieResponse {
  results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get<MovieResponse>(BASE_URL, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      query,
    },
  });
  return response.data.results;
}
