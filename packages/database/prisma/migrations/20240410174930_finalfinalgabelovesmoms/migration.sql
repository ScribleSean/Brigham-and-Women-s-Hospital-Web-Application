/*
  Warnings:

  - You are about to drop the column `message` on the `FlowerServiceRequest` table. All the data in the column will be lost.
  - Added the required column `date` to the `FlowerServiceRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FlowerServiceRequest" DROP COLUMN "message",
ADD COLUMN     "date" TEXT NOT NULL;
