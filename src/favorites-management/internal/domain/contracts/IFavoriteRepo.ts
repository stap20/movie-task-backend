import { Favorite } from "../models/Favorite";

export interface IFavoriteRepo {
    nextId(): Promise<number>;
    save(favorite: Favorite): Promise<void>;
    update(favorite: Favorite): Promise<void>;
    delete(id: number): Promise<void>;
    getAll(): Promise<Favorite[]>;
    getById(id: number): Promise<Favorite>;
}


export const IFavoriteRepo = Symbol("IFavoriteRepo");