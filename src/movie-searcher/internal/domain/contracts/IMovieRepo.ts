import { Movie } from "../models/Movie";

export interface IMovieRepo {
    searchMovies(searchTerm: string,page:number): Promise<Movie[]>;
}

export const IMovieRepo = Symbol("IMovieRepo");