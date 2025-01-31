import { Inject, Injectable } from "@nestjs/common";
import { IFavoriteRepo } from "src/favorites-management/internal/domain/contracts/IFavoriteRepo";
import { AddFavoriteResponse } from "./AddFavoriteResponse";
import { AddFavorite } from "./AddFavorite";
import { Favorite } from "src/favorites-management/internal/domain/models/Favorite";

@Injectable()
export class AddFavoriteHandler {
    constructor(@Inject(IFavoriteRepo) private readonly favoriteRepo: IFavoriteRepo) { }

    async handle(command: AddFavorite): Promise<AddFavoriteResponse> {

        var favoriteId = await this.favoriteRepo.nextId();

        var newFavorite = Favorite.create(favoriteId, command.title, command.year, command.imdbID, command.posterLink);

        await this.favoriteRepo.save(newFavorite);

        return { id: favoriteId };
    }
}