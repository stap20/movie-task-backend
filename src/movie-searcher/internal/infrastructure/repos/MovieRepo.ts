import axios from "axios";
import { IMovieRepo } from "../../domain/contracts/IMovieRepo";
import { Movie } from "../../domain/models/Movie";
import { MovieMapper } from "../mappers/MovieMapper";
import { Injectable } from "@nestjs/common";

export class MovieRepo implements IMovieRepo {
    private readonly apiKey = process.env.OMDB_API_KEY;
    private readonly baseUrl = 'https://www.omdbapi.com/';
    private readonly movieType = 'movie';
    async searchMovies(query: string, page: number): Promise<Movie[]> {
        const response = await axios.get(this.baseUrl, {
            params: { apikey: this.apiKey, s: query, type: this.movieType, page },
        });

        if (response.data.Response === 'False') {
            return [];
        }
        
        return response.data.Search.map(MovieMapper.toDomain);
    }
}