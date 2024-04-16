/*
  Warnings:

  - You are about to drop the `HighScore` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `ServiceRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ServiceRequest" ADD COLUMN     "description" TEXT NOT NULL;

-- DropTable
DROP TABLE "HighScore";

-- CreateTable
CREATE TABLE "RoomSchedulingRequest" (
    "SRID" INTEGER NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,

    CONSTRAINT "RoomSchedulingRequest_pkey" PRIMARY KEY ("SRID")
);

-- CreateTable
CREATE TABLE "MedicalDeviceServiceRequest" (
    "SRID" INTEGER NOT NULL,
    "deviceName" TEXT NOT NULL,
    "deviceQuantity" TEXT NOT NULL,

    CONSTRAINT "MedicalDeviceServiceRequest_pkey" PRIMARY KEY ("SRID")
);

-- CreateTable
CREATE TABLE "GiftServiceRequest" (
    "SRID" INTEGER NOT NULL,
    "senderName" TEXT NOT NULL,
    "receiverName" TEXT NOT NULL,
    "giftType" TEXT NOT NULL,
    "deliveryDate" TEXT NOT NULL,

    CONSTRAINT "GiftServiceRequest_pkey" PRIMARY KEY ("SRID")
);

-- CreateTable
CREATE TABLE "MedicineDeliveryServiceRequest" (
    "SRID" INTEGER NOT NULL,
    "medicineType" TEXT NOT NULL,
    "dosageType" TEXT NOT NULL,
    "dosageAmount" INTEGER NOT NULL,

    CONSTRAINT "MedicineDeliveryServiceRequest_pkey" PRIMARY KEY ("SRID")
);

-- AddForeignKey
ALTER TABLE "RoomSchedulingRequest" ADD CONSTRAINT "RoomSchedulingRequest_SRID_fkey" FOREIGN KEY ("SRID") REFERENCES "ServiceRequest"("SRID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalDeviceServiceRequest" ADD CONSTRAINT "MedicalDeviceServiceRequest_SRID_fkey" FOREIGN KEY ("SRID") REFERENCES "ServiceRequest"("SRID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GiftServiceRequest" ADD CONSTRAINT "GiftServiceRequest_SRID_fkey" FOREIGN KEY ("SRID") REFERENCES "ServiceRequest"("SRID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicineDeliveryServiceRequest" ADD CONSTRAINT "MedicineDeliveryServiceRequest_SRID_fkey" FOREIGN KEY ("SRID") REFERENCES "ServiceRequest"("SRID") ON DELETE RESTRICT ON UPDATE CASCADE;
