import { AddFavorite } from "src/favorites-management/internal/application/commands/add-favorite/AddFavorite";
import { AddFavoriteRequest } from "../../dtos/AddFavoriteRequest";

export class AddFavoriteMapper {
    static toCommand(request: AddFavoriteRequest): AddFavorite {
        return {
            title: request.title,
            year: request.year,
            imdbID: request.imdbID,
            posterLink: request.posterLink,
        };
    }
}