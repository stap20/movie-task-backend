import { Inject, Injectable } from "@nestjs/common";
import { IMovieRepo } from "src/movie-searcher/internal/domain/contracts/IMovieRepo";
import { SearchMoviesResponse } from "./SearchMoviesResponse";
import { SearchMoviesMapper } from "./SearchMoviesMapper";
import { SearchMoviesQuery } from "./SearchMoviesQuery";

@Injectable()
export class SearchMoviesHandler {
    constructor(@Inject(IMovieRepo) private readonly movieRepo: IMovieRepo) { }

    async handle(query: SearchMoviesQuery): Promise<SearchMoviesResponse> {
        const moviesData = await this.movieRepo.searchMovies(query.searchTerm, query.page);
   
        return { movies: moviesData.map(SearchMoviesMapper.toResponse), totalResults: moviesData.length, page: query.page };
    }
}