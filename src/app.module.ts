import { Module } from '@nestjs/common';
import { MovieSearcherModule } from './movie-searcher/movie-searcher.module';

@Module({
  imports: [MovieSearcherModule],
})
export class AppModule {}
