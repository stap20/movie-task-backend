import { Module } from '@nestjs/common';
import { MovieSearcherModule } from './movie-searcher/shared/movie-searcher.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),MovieSearcherModule],
})
export class AppModule {}
