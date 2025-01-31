import { IFavoriteRepo } from "../contracts/IFavoriteRepo";

export class Favorite {
    private id:number;
    private title:string;
    private year:number;
    private imdbID:string;
    private posterLink:string;
    private creationDate:Date;
    private lastUpdate:Date;

    private constructor(id:number, title:string, year:number, imdbID:string, posterLink:string, creationDate:Date, lastUpdate:Date) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.imdbID = imdbID;
        this.posterLink = posterLink;
    }

    public static create(id:number, title:string, year:string, imdbID:string, posterLink:string):Favorite {
        return new Favorite(id, title, parseInt(year), imdbID, posterLink, new Date(), new Date());
    }

    public update(title:string, year:number, imdbID:string, posterLink:string):void {
        this.title = title;
        this.year = year;
        this.imdbID = imdbID;
        this.posterLink = posterLink;
        this.lastUpdate = new Date();
    }

    public async delete(favoriteRepo:IFavoriteRepo):Promise<void> {
        await favoriteRepo.delete(this.id);
    } 

    get Id():number {
        return this.id;
    }

    get Title():string {
        return this.title;
    }

    get Year():number {
        return this.year;
    }

    get ImdbID():string {
        return this.imdbID;
    }

    get PosterLink():string {
        return this.posterLink;
    }

    get CreationDate():Date {
        return this.creationDate;
    }   

    get LastUpdate():Date {
        return this.lastUpdate;
    }

}