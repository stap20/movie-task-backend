export class Movie {
    private title: string;
    private year: string;
    private imdbID: string;
    private posterLink: string;

    private constructor(title: string, year: string, imdbID: string, posterLink: string) {
        this.title = title;
        this.year = year;
        this.imdbID = imdbID;
        this.posterLink = posterLink;
    }

    public static create(title: string, year: string, imdbID: string, posterLink: string): Movie {
        if (!posterLink || !posterLink.startsWith('http')) {
            throw new Error('Invalid poster link');
        }

        return new Movie(title, year, imdbID, posterLink);
    }

    get Title(): string {
        return this.title;
    }

    get Year(): string {
        return this.year;
    }

    get ImdbID(): string {
        return this.imdbID;
    }

    get PosterLink(): string {
        return this.posterLink;
    }

}