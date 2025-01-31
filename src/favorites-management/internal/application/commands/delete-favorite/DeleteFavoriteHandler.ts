import { Inject, Injectable } from "@nestjs/common";
import { IFavoriteRepo } from "src/favorites-management/internal/domain/contracts/IFavoriteRepo";
import { DeleteFavorite } from "./DeleteFavorite";

@Injectable()
export class DeleteFavoriteHandler {
    constructor(@Inject(IFavoriteRepo) private readonly favoriteRepo: IFavoriteRepo) { }

    async handle(command: DeleteFavorite): Promise<void> {
        var favorite = await this.favoriteRepo.getById(command.id);

        if (!favorite) {
            throw new Error("Favorite not found");
        }

        await favorite.delete(this.favoriteRepo);
    }
}