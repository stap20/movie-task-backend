import { Movie } from "../../domain/models/Movie";
import { OMDBResponse } from "../repos/OMDBResponse";

export class MovieMapper {
    static toDomain(response:OMDBResponse): Movie {
        return Movie.create(response.Title, response.Year, response.imdbID, response.Poster);
    }
}