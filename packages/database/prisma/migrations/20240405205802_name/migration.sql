/*
  Warnings:

  - The primary key for the `FlowerServiceRequest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `FlowerServiceRequest` table. All the data in the column will be lost.
  - The primary key for the `GiftServiceRequest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `GiftServiceRequest` table. All the data in the column will be lost.
  - The primary key for the `ServiceRequest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `ServiceRequest` table. All the data in the column will be lost.
  - Added the required column `SRID` to the `FlowerServiceRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SRID` to the `GiftServiceRequest` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FlowerServiceRequest" DROP CONSTRAINT "FlowerServiceRequest_ID_fkey";

-- DropForeignKey
ALTER TABLE "GiftServiceRequest" DROP CONSTRAINT "GiftServiceRequest_ID_fkey";

-- AlterTable
ALTER TABLE "FlowerServiceRequest" DROP CONSTRAINT "FlowerServiceRequest_pkey",
DROP COLUMN "ID",
ADD COLUMN     "SRID" INTEGER NOT NULL,
ADD CONSTRAINT "FlowerServiceRequest_pkey" PRIMARY KEY ("SRID");

-- AlterTable
ALTER TABLE "GiftServiceRequest" DROP CONSTRAINT "GiftServiceRequest_pkey",
DROP COLUMN "ID",
ADD COLUMN     "SRID" INTEGER NOT NULL,
ADD CONSTRAINT "GiftServiceRequest_pkey" PRIMARY KEY ("SRID");

-- AlterTable
ALTER TABLE "ServiceRequest" DROP CONSTRAINT "ServiceRequest_pkey",
DROP COLUMN "ID",
ADD COLUMN     "SRID" SERIAL NOT NULL,
ADD CONSTRAINT "ServiceRequest_pkey" PRIMARY KEY ("SRID");

-- AddForeignKey
ALTER TABLE "FlowerServiceRequest" ADD CONSTRAINT "FlowerServiceRequest_SRID_fkey" FOREIGN KEY ("SRID") REFERENCES "ServiceRequest"("SRID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GiftServiceRequest" ADD CONSTRAINT "GiftServiceRequest_SRID_fkey" FOREIGN KEY ("SRID") REFERENCES "ServiceRequest"("SRID") ON DELETE RESTRICT ON UPDATE CASCADE;
