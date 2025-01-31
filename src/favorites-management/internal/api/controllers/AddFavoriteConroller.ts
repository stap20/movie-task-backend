import { Body, Controller, Post } from "@nestjs/common";
import { AddFavoriteHandler } from "../../application/commands/add-favorite/AddFavoriteHandler";
import { AddFavoriteResponse } from "../../application/commands/add-favorite/AddFavoriteResponse";
import { AddFavoriteRequest } from "../dtos/AddFavoriteRequest";
import { AddFavoriteMapper } from "./mappers/AddFavoriteMapper";

@Controller('/v1/favorites')
export class AddFavoriteController {
    constructor(private readonly addFavoriteHandler: AddFavoriteHandler) { }

    @Post()
    async addFavorite(@Body() body: AddFavoriteRequest): Promise<AddFavoriteResponse> {
        const favorite = await this.addFavoriteHandler.handle(AddFavoriteMapper.toCommand(body));

        return favorite;
    }
}