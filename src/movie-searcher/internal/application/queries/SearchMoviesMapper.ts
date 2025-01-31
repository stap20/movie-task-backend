import { Movie } from "../../domain/models/Movie";
import { MovieData } from "./MovieData";

export class SearchMoviesMapper {
    static toResponse(movieDomain: Movie):MovieData{
        return {
            title: movieDomain.Title,
            year: movieDomain.Year,
            imdbID: movieDomain.ImdbID,
            posterLink: movieDomain.PosterLink
        }
    }
}