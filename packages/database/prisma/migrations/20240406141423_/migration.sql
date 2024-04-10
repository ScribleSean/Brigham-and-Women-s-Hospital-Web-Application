/*
  Warnings:

  - You are about to drop the `GiftServiceRequest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GiftServiceRequest" DROP CONSTRAINT "GiftServiceRequest_SRID_fkey";

-- DropTable
DROP TABLE "GiftServiceRequest";
