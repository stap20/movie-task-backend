import { Inject, Injectable } from "@nestjs/common";
import { IFavoriteRepo } from "src/favorites-management/internal/domain/contracts/IFavoriteRepo";
import { UpdateFavorite } from "./UpdateFavorite";

@Injectable()
export class UpdateFavoriteHandler {
    constructor(@Inject(IFavoriteRepo) private readonly favoriteRepo: IFavoriteRepo) { }

    async handle(command: UpdateFavorite): Promise<void> {
        var favorite = await this.favoriteRepo.getById(command.id);

        if (!favorite) {
            throw new Error("Favorite not found");
        }

        favorite.update(command.title, command.year, command.imdbID, command.posterLink);

        await this.favoriteRepo.save(favorite);
    }
}