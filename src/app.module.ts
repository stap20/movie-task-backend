import { Module } from '@nestjs/common';
import { MovieSearcherModule } from './movie-searcher/shared/movie-searcher.module';
import { ConfigModule } from '@nestjs/config';
import { FavoritesManagementModule } from './favorites-management/shared/favorites-management.module';

@Module({
  imports: [ConfigModule.forRoot(),MovieSearcherModule, FavoritesManagementModule],
})
export class AppModule {}
