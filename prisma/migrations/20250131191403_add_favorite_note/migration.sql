/*
  Warnings:

  - Added the required column `favorite_note` to the `Favorite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Favorite" ADD COLUMN     "favorite_note" TEXT NOT NULL;
