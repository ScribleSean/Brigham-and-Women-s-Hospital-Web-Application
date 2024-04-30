/*
  Warnings:

  - Added the required column `character` to the `BreakOutHighScore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `BreakOutHighScore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BreakOutHighScore" ADD COLUMN     "character" TEXT NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
