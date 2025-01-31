/*
  Warnings:

  - You are about to drop the column `poster` on the `Favorite` table. All the data in the column will be lost.
  - Added the required column `poster_link` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `year` on the `Favorite` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "poster",
ADD COLUMN     "poster_link" TEXT NOT NULL,
DROP COLUMN "year",
ADD COLUMN     "year" INTEGER NOT NULL;
