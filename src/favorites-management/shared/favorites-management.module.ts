import { Module } from '@nestjs/common';
import { AddFavoriteHandler } from '../internal/application/commands/add-favorite/AddFavoriteHandler';
import { FavoriteRepo } from '../internal/infrastructure/repos/FavoriteRepo';
import { IFavoriteRepo } from '../internal/domain/contracts/IFavoriteRepo';
import { UpdateFavoriteHandler } from '../internal/application/commands/update-favorite/UpdateFavoriteHandler';
import { DeleteFavoriteHandler } from '../internal/application/commands/delete-favorite/DeleteFavoriteHandler';

@Module({
    providers: [AddFavoriteHandler,UpdateFavoriteHandler,DeleteFavoriteHandler,{ provide: IFavoriteRepo, useClass: FavoriteRepo }],
    controllers: [],
})
export class FavoritesManagementModule {}
