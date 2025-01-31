import { Favorite } from "../../domain/models/Favorite";

export class ResponseMapper {
    static toResponse(favorite: Favorite) {
        return {
            id: favorite.Id,
            title: favorite.Title,
            year: favorite.Year,
            imdbID: favorite.ImdbID,
            posterLink: favorite.PosterLink
        }
    }
}