/*
  Warnings:

  - You are about to drop the column `imageUrls` on the `Trip` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "imageUrls",
ADD COLUMN     "imagesUrl" TEXT[];
