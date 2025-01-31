import { Controller, Get } from "@nestjs/common";
import { GetFavoritesHandler } from "../../application/queries/GetFavoritesHandler";
import { GetFavoritesResponse } from "../../application/queries/GetFavoritesResponse";

@Controller('/v1/favorites')
export class GetAllFavoritesController {
    constructor(private readonly getFavoriteHandler: GetFavoritesHandler) { }

    @Get()
    async getAllFavorites(): Promise<GetFavoritesResponse> {
        return this.getFavoriteHandler.handle();
    }
}