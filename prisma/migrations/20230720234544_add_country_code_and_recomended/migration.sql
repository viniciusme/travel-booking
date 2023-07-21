/*
  Warnings:

  - Added the required column `countryCode` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "countryCode" TEXT NOT NULL,
ADD COLUMN     "recomended" BOOLEAN NOT NULL DEFAULT false;
