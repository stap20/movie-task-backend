import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { UpdateFavoriteHandler } from "../../application/commands/update-favorite/UpdateFavoriteHandler";
import { UpdateFavorite } from "../../application/commands/update-favorite/UpdateFavorite";
import { UpdateFavoriteRequest } from "../dtos/UpdateFavoriteRequest";

@Controller('/v1/favorites')
export class UpdateFavoriteController {
    constructor(private readonly updateFavoriteHandler: UpdateFavoriteHandler) { }

    @Put(':id')
    async updateFavorite(@Param('id') id: string, @Body() updates: UpdateFavoriteRequest) : Promise<void> {
        const updateFavoriteCommand: UpdateFavorite = { id: parseInt(id), ...updates };
        await this.updateFavoriteHandler.handle(updateFavoriteCommand);
    }
}