/*
  Warnings:

  - Added the required column `receiverName` to the `FlowerServiceRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FlowerServiceRequest" ADD COLUMN     "receiverName" TEXT NOT NULL;
