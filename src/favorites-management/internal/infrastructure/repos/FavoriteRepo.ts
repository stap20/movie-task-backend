import { Injectable } from "@nestjs/common";
import { IFavoriteRepo } from "../../domain/contracts/IFavoriteRepo";
import { PrismaService } from "src/shared/database/PrismaService";
import { Favorite } from "../../domain/models/Favorite";
import { FavoriteMapper } from "./mappers/FavoriteMapper";

@Injectable()
export class FavoriteRepo implements IFavoriteRepo {
    constructor(private readonly prisma: PrismaService) { }

    async nextId(): Promise<number> {
        const lastFavorite = await this.prisma.favorite.findFirst({
            orderBy: { id: 'desc' },
        });
        return lastFavorite ? lastFavorite.id + 1 : 1;
    }

    async save(favorite: Favorite): Promise<void> {
        const favdbModel = FavoriteMapper.toPersistence(favorite);
        await this.prisma.favorite.create({
            data: favdbModel,
        });
    }

    async update(favorite: Favorite): Promise<void> {
        const favdbModel = FavoriteMapper.toPersistence(favorite);
        await this.prisma.favorite.update({
            where: { id: favorite.Id },
            data: favdbModel,
        });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.favorite.delete({
            where: { id },
        });
    }

    async getAll(): Promise<Favorite[]> {
        const dbModels = await this.prisma.favorite.findMany();
        return dbModels.map(FavoriteMapper.toDomain);
    }

    async getById(id: number): Promise<Favorite> {
        const favdbModel = await this.prisma.favorite.findUnique({
          where: { id },
        });

        if (!favdbModel) {
          throw new Error(`Favorite with ID ${id} not found`);
        }

        return FavoriteMapper.toDomain(favdbModel);
      }
}