import { Inject, Injectable } from "@nestjs/common";
import { IFavoriteRepo } from "../../domain/contracts/IFavoriteRepo";
import { GetFavoritesResponse } from "./GetFavoritesResponse";
import { ResponseMapper } from "./ResponseMapper";

@Injectable()
export class GetFavoritesHandler {
    constructor(@Inject(IFavoriteRepo) private readonly favoriteRepo: IFavoriteRepo) { }

    async handle(): Promise<GetFavoritesResponse> {
        const favoritesData = (await this.favoriteRepo.getAll()).map(ResponseMapper.toResponse);
        return favoritesData;
    }
}