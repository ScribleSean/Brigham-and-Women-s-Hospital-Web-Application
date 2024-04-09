/*
  Warnings:

  - You are about to drop the `FlowerForm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GiftForm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FlowerForm" DROP CONSTRAINT "FlowerForm_formID_fkey";

-- DropForeignKey
ALTER TABLE "GiftForm" DROP CONSTRAINT "GiftForm_formID_fkey";

-- DropTable
DROP TABLE "FlowerForm";

-- DropTable
DROP TABLE "GiftForm";

-- CreateTable
CREATE TABLE "FlowerServiceRequest" (
    "formID" INTEGER NOT NULL,
    "flowerType" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "FlowerServiceRequest_pkey" PRIMARY KEY ("formID")
);

-- CreateTable
CREATE TABLE "GiftServiceRequest" (
    "formID" INTEGER NOT NULL,
    "giftType" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "GiftServiceRequest_pkey" PRIMARY KEY ("formID")
);

-- AddForeignKey
ALTER TABLE "FlowerServiceRequest" ADD CONSTRAINT "FlowerServiceRequest_formID_fkey" FOREIGN KEY ("formID") REFERENCES "ServiceRequest"("formID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GiftServiceRequest" ADD CONSTRAINT "GiftServiceRequest_formID_fkey" FOREIGN KEY ("formID") REFERENCES "ServiceRequest"("formID") ON DELETE RESTRICT ON UPDATE CASCADE;
