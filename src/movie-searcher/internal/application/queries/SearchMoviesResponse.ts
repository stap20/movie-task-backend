import { MovieData } from "./MovieData";

export type SearchMoviesResponse = {
    movies: MovieData[],
    totalResults: number,
    page: number
};
