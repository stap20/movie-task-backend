import { Favorite } from "src/favorites-management/internal/domain/models/Favorite";
import { FavoriteEntity } from "../../db/FavoriteEntity";

export class FavoriteMapper {
    static toPersistence(favorite: Favorite): FavoriteEntity {
        return {
            id: favorite.Id,
            title: favorite.Title,
            year: favorite.Year,
            imdbID: favorite.ImdbID,
            poster_link: favorite.PosterLink,
            createdAt: favorite.CreationDate,
            updatedAt: favorite.LastUpdate,
        };
    }
    static toDomain(favorite: FavoriteEntity): Favorite {
        return Favorite.create(favorite.id, favorite.title, favorite.year.toString(), favorite.imdbID, favorite.poster_link, favorite.createdAt, favorite.updatedAt);
    }
}