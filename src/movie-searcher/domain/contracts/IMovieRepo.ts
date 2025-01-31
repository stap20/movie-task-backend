import { Movie } from "../models/Movie";

export interface IMovieRepo {
    searchMovies(searchTerm: string): Promise<Movie[]>;
}