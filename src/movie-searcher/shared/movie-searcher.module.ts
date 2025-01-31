import { Module } from '@nestjs/common';
import { SearchMoviesHandler } from '../internal/application/queries/SearchMoviesHandler';
import { IMovieRepo } from '../internal/domain/contracts/IMovieRepo';
import { MovieRepo } from '../internal/infrastructure/repos/MovieRepo';
import { SearchMoviesController } from '../internal/api/SearchMoviesController';

@Module({
    providers: [SearchMoviesHandler,{provide: IMovieRepo, useClass: MovieRepo}],
    controllers: [SearchMoviesController],
})
export class MovieSearcherModule {}
