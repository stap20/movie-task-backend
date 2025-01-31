import { Delete, Module } from '@nestjs/common';
import { AddFavoriteHandler } from '../internal/application/commands/add-favorite/AddFavoriteHandler';
import { FavoriteRepo } from '../internal/infrastructure/repos/FavoriteRepo';
import { IFavoriteRepo } from '../internal/domain/contracts/IFavoriteRepo';
import { UpdateFavoriteHandler } from '../internal/application/commands/update-favorite/UpdateFavoriteHandler';
import { DeleteFavoriteHandler } from '../internal/application/commands/delete-favorite/DeleteFavoriteHandler';
import { GetFavoritesHandler } from '../internal/application/queries/GetFavoritesHandler';
import { AddFavoriteController } from '../internal/api/controllers/AddFavoriteConroller';
import { UpdateFavoriteController } from '../internal/api/controllers/UpdateFavoriteController';
import { DeleteFavoriteController } from '../internal/api/controllers/DeleteFavoriteController';
import { GetAllFavoritesController } from '../internal/api/controllers/GetAllFavoritesController';

@Module({
    providers: [AddFavoriteHandler,UpdateFavoriteHandler,DeleteFavoriteHandler,GetFavoritesHandler,{ provide: IFavoriteRepo, useClass: FavoriteRepo }],
    controllers: [AddFavoriteController,UpdateFavoriteController,DeleteFavoriteController,GetAllFavoritesController],
})
export class FavoritesManagementModule {}
