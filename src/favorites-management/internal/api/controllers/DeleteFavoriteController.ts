import {Controller, Delete, Param } from "@nestjs/common";
import { DeleteFavoriteHandler } from "../../application/commands/delete-favorite/DeleteFavoriteHandler";

@Controller('/v1/favorites')
export class DeleteFavoriteController {
    constructor(private readonly deleteFavoriteHandler: DeleteFavoriteHandler) { }

    @Delete(':id')
    async deleteFavorite(@Param('id') id: string): Promise<void> {
      await this.deleteFavoriteHandler.handle({id: parseInt(id)});
    }
}