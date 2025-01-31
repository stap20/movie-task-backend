import { Controller, Get, Query } from "@nestjs/common";
import { SearchMoviesHandler } from "../application/queries/SearchMoviesHandler";
import { SearchMoviesQuery } from "../application/queries/SearchMoviesQuery";
import { SearchMoviesResponse } from "../application/queries/SearchMoviesResponse";

@Controller('/v1/movies')
export class SearchMoviesController {
    constructor(private readonly searchMoviesHandler: SearchMoviesHandler) { }

    @Get()
    async searchMovies(@Query('searchTerm') query: string, @Query('page') page: string): Promise<SearchMoviesResponse> {
        const searchMoviesQuery: SearchMoviesQuery = { searchTerm: query, page: parseInt(page) };
        const movies = await this.searchMoviesHandler.handle(searchMoviesQuery);

        return movies;
    }
}