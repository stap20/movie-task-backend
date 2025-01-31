import { Module } from '@nestjs/common';
import { MovieSearcherModule } from './movie-searcher/shared/movie-searcher.module';
import { ConfigModule } from '@nestjs/config';
import { FavoritesManagementModule } from './favorites-management/shared/favorites-management.module';
import { PrismaService } from './shared/database/PrismaService';

@Module({
  imports: [ConfigModule.forRoot(),MovieSearcherModule, FavoritesManagementModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
